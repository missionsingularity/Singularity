const { chromium, request } = require("playwright");

const baseUrl = (process.env.SINGULARITY_BASE_URL || "http://127.0.0.1:5174").replace(/\/$/, "");
const contactPath = baseUrl.includes("127.0.0.1") ? "/contact/" : "/contact";

(async () => {
  const browser = await chromium.launch({
    headless: true,
    ...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE }
      : {}),
  });
  const results = [];

  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
    const page = await browser.newPage({
      viewport,
      isMobile: viewport.width < 500,
      hasTouch: viewport.width < 500,
    });
    const pageErrors = [];
    const failedRequests = [];
    page.on("pageerror", (error) => pageErrors.push(error.message));
    page.on("requestfailed", (request) => {
      if (!request.failure()?.errorText?.includes("ERR_ABORTED")) failedRequests.push(request.url());
    });

    const homeResponse = await page.goto(`${baseUrl}/`, { waitUntil: "load", timeout: 60000 });
    await page.waitForTimeout(1400);
    const home = await page.evaluate(() => ({
      status: document.readyState,
      overflow: document.documentElement.scrollWidth > innerWidth,
      logoLoaded: [...document.images].some((image) => image.currentSrc.includes("singularity-symbol") && image.complete && image.naturalWidth > 0),
      heroLoaded: [...document.images].some((image) => image.getBoundingClientRect().top < innerHeight && image.complete && image.naturalWidth > 0),
      loadedFonts: [...document.fonts].filter((font) => font.status === "loaded").map((font) => font.family),
      runningInfinite: document.getAnimations().filter((animation) => animation.playState === "running" && animation.effect?.getTiming().iterations === Infinity).length,
      pausedInfinite: document.getAnimations().filter((animation) => animation.playState === "paused" && animation.effect?.getTiming().iterations === Infinity).length,
      videos: [...document.querySelectorAll("video")].map((video) => ({ paused: video.paused, preload: video.preload, autoplay: video.autoplay })),
      contactLinks: [...document.querySelectorAll('a[href^="/contact"]')].map((link) => ({ text: (link.innerText || "").trim(), href: link.getAttribute("href") })),
    }));

    let videoPlayback = null;
    const video = page.locator("video").first();
    if (await video.count()) {
      await video.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      const started = await video.evaluate(async (element) => {
        element.muted = true;
        try {
          await element.play();
          return true;
        } catch {
          return false;
        }
      });
      if (started) {
        await page.evaluate(() => scrollTo(0, 0));
        await page.waitForTimeout(350);
        const pausedOffscreen = await video.evaluate((element) => element.paused);
        await video.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
        const resumedOnscreen = await video.evaluate((element) => !element.paused);
        videoPlayback = { started, pausedOffscreen, resumedOnscreen };
      } else {
        videoPlayback = { started, reason: "Browser did not allow scripted playback" };
      }
    }

    if (viewport.width < 500) {
      const trigger = page.locator('[data-framer-name="Mobile menu trigger"]');
      if (await trigger.count()) await trigger.click();
      home.mobileMenu = await page.locator("nav").last().innerText().catch(() => "");
      home.menuHasImplementation = home.mobileMenu.includes("Implementation");
      home.menuHasPricing = home.mobileMenu.includes("Pricing");
    }

    const contactResponse = await page.goto(`${baseUrl}${contactPath}?source=pricing&package=scale`, { waitUntil: "load", timeout: 60000 });
    await page.waitForTimeout(300);
    await page.locator("#submit-button").click();
    const form = await page.evaluate(() => ({
      package: document.querySelector("#package")?.value,
      invalidFields: document.querySelectorAll('[aria-invalid="true"]').length,
      submitDisabled: document.querySelector("#submit-button")?.disabled,
      overflow: document.documentElement.scrollWidth > innerWidth,
      logoLoaded: [...document.images].some((image) => image.currentSrc.includes("singularity-symbol") && image.complete && image.naturalWidth > 0),
    }));

    results.push({
      viewport,
      homeStatus: homeResponse.status(),
      contactStatus: contactResponse.status(),
      home,
      videoPlayback,
      form,
      pageErrors,
      failedRequests,
    });
    await page.close();
  }

  const apiGet = await request.newContext();
  const methodResponse = await apiGet.get(`${baseUrl}/api/contact`, { timeout: 60000 });
  const invalidResponse = await apiGet.post(`${baseUrl}/api/contact`, {
    data: {},
    headers: {
      "content-type": "application/json",
      origin: baseUrl,
      "idempotency-key": "39a4b25a-3e95-43a6-a451-a2cbdf1beeed",
    },
    timeout: 60000,
  });
  const api = {
    getStatus: methodResponse.status(),
    getBody: (await methodResponse.text()).slice(0, 300),
    invalidPostStatus: invalidResponse.status(),
    invalidPostBody: (await invalidResponse.text()).slice(0, 300),
    realMessageSent: false,
  };
  await apiGet.dispose();
  await browser.close();
  console.log(JSON.stringify({ baseUrl, results, api }, null, 2));

  const failed = results.some((result) => result.homeStatus !== 200 || result.contactStatus !== 200 || result.home.overflow || result.form.overflow || !result.home.logoLoaded || !result.form.logoLoaded || result.form.package !== "scale" || !result.form.invalidFields || result.home.videos.some((video) => !video.paused || video.preload !== "none") || result.pageErrors.length || result.failedRequests.length) || api.getStatus !== 405 || api.invalidPostStatus < 400 || api.invalidPostStatus >= 500;
  if (failed) process.exitCode = 1;
})().catch((error) => { console.error(error); process.exit(1); });
