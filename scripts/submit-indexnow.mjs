// Submits every URL in the live sitemap to the IndexNow API (api.indexnow.org),
// which fans out to every participating search engine (Bing, Yandex, Seznam,
// Naver -- Google isn't part of the IndexNow consortium as of 2026, so this
// complements Search Console rather than replacing it). Re-run this after any
// significant content change; IndexNow has no per-URL cost or rate limit
// worth worrying about at this site's size (~100 URLs, well under the
// 10,000-URL single-request cap).
const KEY = "f61cb3f309d421942923c6f8c4c5e2c3";
const HOST = "calyroc.com";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const sitemapRes = await fetch(`https://${HOST}/sitemap.xml`);
const sitemapXml = await sitemapRes.text();
const urlList = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

console.log(`Submitting ${urlList.length} URLs to IndexNow...`);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

console.log(`IndexNow response: ${res.status} ${res.statusText}`);
