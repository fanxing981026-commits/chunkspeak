import { readFileSync } from "node:fs";
import { strict as assert } from "node:assert";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const css = readFileSync(new URL("../styles.css", import.meta.url), "utf8");
const js = readFileSync(new URL("../app.js", import.meta.url), "utf8");
const successHtml = readFileSync(new URL("../success.html", import.meta.url), "utf8");
const vercelConfig = readFileSync(new URL("../vercel.json", import.meta.url), "utf8");

const requiredIds = [
  "card-grid",
  "search-input",
  "study-modal",
  "checkin-button",
  "article-input",
  "scan-article",
  "quiz-answer",
  "next-question",
  "pricing",
  "buy-premium",
];

for (const id of requiredIds) {
  assert.match(html, new RegExp(`id="${id}"`), `missing #${id}`);
}

for (const className of ["hero-orbit", "audio-stage", "reveal-on-scroll", "cursor-glow"]) {
  assert.match(html + css + js, new RegExp(className), `missing ${className}`);
}

assert.match(js, /IntersectionObserver/, "missing scroll reveal observer");
assert.match(css, /prefers-reduced-motion/, "missing reduced motion support");
assert.match(js, /CREEM_PAYMENT_LINK/, "missing Creem payment link config");
assert.match(html, /完整语块库/, "missing paid product copy");
assert.match(successHtml, /支付成功/, "missing payment success page");
assert.match(vercelConfig, /cleanUrls/, "missing Vercel static config");
