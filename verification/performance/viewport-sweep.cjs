const { chromium } = require("C:/Users/spond/AppData/Local/Temp/singularity-playwright/node_modules/playwright");

const widths = [2560, 1920, 1440, 1280, 1024, 820, 768, 600, 430, 414, 390, 375, 360];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  for (const width of widths) {
    const page = await browser.newPage({
      viewport: { width, height: 900 },
      isMobile: width < 500,
      hasTouch: width < 500,
    });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("http://127.0.0.1:4176/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(900);
    results.push(await page.evaluate(({ width, errors }) => ({
      width,
      docWidth: document.documentElement.scrollWidth,
      viewportWidth: innerWidth,
      horizontalOverflow: document.documentElement.scrollWidth > innerWidth,
      title: document.title,
      errors,
    }), { width, errors }));
    await page.close();
  }
  await browser.close();
  console.log(JSON.stringify(results));
  if (results.some((result) => result.horizontalOverflow || result.errors.length)) process.exitCode = 1;
})().catch((error) => { console.error(error); process.exit(1); });
