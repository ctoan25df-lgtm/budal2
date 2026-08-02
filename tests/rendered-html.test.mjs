import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", process.pid + "-" + Date.now());
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost" + path, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("홈이 부달주소 관찰 노트로 렌더링된다", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /<title>부달주소 관찰 기록/);
  assert.match(html, /최신보다 변화 기록/);
  assert.match(html, /재확인 필요/);
  assert.match(html, /부산달리기와 별개의 플랫폼/);
  assert.match(html, /rel="noopener noreferrer sponsored nofollow"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
  assert.doesNotMatch(html, /name="keywords"/);
});

test("핵심 가이드 라우트가 서버 렌더링된다", async () => {
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
  }
});
