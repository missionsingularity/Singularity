const { chromium } = require("playwright");

const baseUrl = (process.env.SINGULARITY_BASE_URL || "http://127.0.0.1:4176").replace(/\/$/, "");
const widths = [2560, 1920, 1440, 1280, 1024, 820, 768, 600, 430, 414, 390, 375, 360];
const routes = ["/", "/contact/?source=pricing&package=scale"];

(async () => {
  const browser = await chromium.launch({
    headless: true,
    ...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE }
      : {}),
  });
  const results = [];
  for (const width of widths) {
    for (const route of routes) {
      const page = await browser.newPage({
        viewport: { width, height: 900 },
        isMobile: width < 500,
        hasTouch: width < 500,
      });
      const errors = [];
      page.on("pageerror", (error) => errors.push(error.message));
      await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(250);
      const result = await page.evaluate(({ width, route, errors }) => ({
        width,
        route: route.split("?")[0],
        docWidth: document.documentElement.scrollWidth,
        viewportWidth: innerWidth,
        horizontalOverflow: document.documentElement.scrollWidth > innerWidth,
        title: document.title,
        package: document.querySelector("#package")?.value || null,
        errors,
      }), { width, route, errors });
      if (route.startsWith("/contact") && result.package !== "scale") {
        errors.push("Contact package query was not selected");
      }
      result.errors = errors;
      results.push(result);
      await page.close();
    }
  }
  await browser.close();
  console.log(JSON.stringify(results));
  if (results.some((result) => result.horizontalOverflow || result.errors.length)) process.exitCode = 1;
})().catch((error) => { console.error(error); process.exit(1); });
