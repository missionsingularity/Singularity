const fs = require("node:fs");
const path = require("node:path");
const { request } = require("playwright");

const baseUrl = (process.env.SINGULARITY_BASE_URL || "https://missionsingularity.vercel.app").replace(/\/$/, "");
const assetRoot = path.resolve("site/public/assets");
const checkedExtensions = new Set([".woff", ".woff2", ".ttf", ".otf", ".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif", ".svg", ".mp4", ".webm"]);

function collect(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collect(filePath);
    return checkedExtensions.has(path.extname(entry.name).toLowerCase()) ? [filePath] : [];
  });
}

(async () => {
  const api = await request.newContext();
  const assets = collect(assetRoot);
  const failures = [];
  const totals = new Map();

  for (let start = 0; start < assets.length; start += 8) {
    const batch = assets.slice(start, start + 8);
    await Promise.all(batch.map(async (filePath) => {
      const relative = path.relative(assetRoot, filePath).split(path.sep).join("/");
      const url = `${baseUrl}/assets/${relative}`;
      const isVideo = /\.(mp4|webm)$/i.test(filePath);
      try {
        const response = await api.get(url, {
          headers: isVideo ? { range: "bytes=0-0" } : {},
          timeout: 30000,
        });
        const body = await response.body();
        const extension = path.extname(filePath).toLowerCase();
        const row = totals.get(extension) || { files: 0, bytes: 0 };
        row.files += 1;
        row.bytes += body.length;
        totals.set(extension, row);
        if (![200, 206].includes(response.status()) || body.length === 0) {
          failures.push({ url, status: response.status(), bytes: body.length });
        }
      } catch (error) {
        failures.push({ url, error: error.message });
      }
    }));
  }

  await api.dispose();
  console.log(JSON.stringify({ baseUrl, checked: assets.length, totals: Object.fromEntries(totals), failures }, null, 2));
  if (failures.length) process.exitCode = 1;
})().catch((error) => { console.error(error); process.exit(1); });
