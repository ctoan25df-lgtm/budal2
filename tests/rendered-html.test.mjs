import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const baseUrl = process.env.TEST_BASE_URL ?? "http://localhost:3003";
  return fetch(new URL(path, baseUrl), {
    headers: { accept: "text/html" },
  });
}

test("홈이 부달주소 확인 가이드로 렌더링된다", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /부달주소 확인 방법|부달주소 확인 가이드/);
  assert.match(html, /밤의달인\(밤달\) 지역 목록|부산 목록/);
  assert.match(html, /bamdalin\.com\/board\/region\/busan/);
  assert.match(html, /bamdalin\.com\/board\/region\/gyeongnam/);
  assert.match(html, /bamdalin\.com\/board\/region\/ulsan/);
  assert.match(html, /재확인 필요/);
  assert.match(html, /별개의 플랫폼/);
  assert.match(html, /rel="noopener noreferrer sponsored"/);
  assert.match(html, /rel="canonical" href="https:\/\/budal\.yuheungpick\.com"/);
  assert.doesNotMatch(html, /chatgpt\.site|brocpn/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("핵심 가이드 라우트가 서버 렌더링되고 Bamdalin CTA를 포함한다", async () => {
  for (const path of [
    "/address-log",
    "/regions",
    "/board-guide",
    "/editorial",
  ]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, /<main/);
    assert.match(html, /application\/ld\+json/);
    assert.match(html, /BreadcrumbList|밤의달인|bamdalin\.com/);
  }
});
