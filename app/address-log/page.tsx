import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader, Breadcrumb } from "../components/SiteChrome";
import { SITE, jsonLd, pageMetadata } from "../site";

const title = "부달주소 공개 채널 관찰 기록";
const description =
  "부달주소와 부산달리기 관련 Linktree, Telegram 등 공개 채널의 주소 주장을 대조하고 단일 공식 호스트 확정을 보류한 이유를 설명합니다.";

export const metadata: Metadata = pageMetadata(
  title,
  description,
  "/address-log",
);

const sources = [
  {
    label: "Linktree @busandal",
    url: SITE.linktreeUrl,
    observed: "부산달리기·부달 바로가기 채널을 표방",
    status: "운영 관계 추가 확인 필요",
  },
  {
    label: "Telegram @budalinfo",
    url: SITE.telegramUrl,
    observed: "복수 한글·영문 주소와 숫자형 주소를 함께 표시",
    status: "표시 주소 간 일관성 재확인 필요",
  },
  {
    label: "검색 결과의 주소 안내 사이트",
    url: "https://www.budallink.com/",
    observed: "공식 최신주소 안내를 주장하나 독립 사이트 고지가 불명확",
    status: "공식성 근거로 사용하지 않음",
  },
];

export default function AddressLogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    dateModified: SITE.reviewedAt,
    inLanguage: "ko-KR",
    mainEntityOfPage: new URL("/address-log", SITE.url).toString(),
  };

  return (
    <main id="main-content" className="article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <div className="wrap article-wrap">
        <Breadcrumb current="주소 관찰" />
        <ArticleHeader
          issue="NOTE 01 · ADDRESS LOG"
          title={title}
          lead="주소 하나를 빨리 고르는 것보다 서로 다른 주장을 그대로 나란히 놓고 확정할 수 없는 이유를 남깁니다."
        />

        <aside className="verdict-box">
          <div>
            <span>EDITORIAL VERDICT</span>
            <strong>{SITE.status}</strong>
          </div>
          <p>
            {SITE.reviewedAt} 기준 공개 채널에서 서로 다른 주소 표기가 관찰되어
            단일 공식 호스트를 확정하지 않았습니다. 접속 가능하다는 사실만으로
            운영 주체와 안전성이 증명되지는 않습니다.
          </p>
        </aside>

        <section className="article-section">
          <h2>확인한 공개 출처</h2>
          <div className="source-ledger">
            {sources.map((source, index) => (
              <article key={source.url}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{source.label}</h3>
                  <p>{source.observed}</p>
                  <strong>{source.status}</strong>
                </div>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  원문 ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="article-section two-column">
          <div>
            <h2>확정하지 않은 이유</h2>
            <p>
              한 채널이 여러 주소를 동시에 표시하거나, 서로 다른 안내 사이트가
              모두 “공식”을 주장하고 있습니다. 이 상황에서 검색 순위가 높다는
              이유로 하나를 선택하면 출처 확인이 아니라 추측이 됩니다.
            </p>
          </div>
          <div className="rule-list">
            <p><strong>01</strong> 숫자 +1 주소를 다음 도메인으로 예측하지 않기</p>
            <p><strong>02</strong> 캡처 이미지보다 직접 열 수 있는 공지 우선</p>
            <p><strong>03</strong> 주소, 채널, 확인일을 한 묶음으로 기록</p>
            <p><strong>04</strong> 보안 경고가 보이면 접속과 입력 중단</p>
          </div>
        </section>

        <section className="article-section">
          <h2>직접 확인할 때의 순서</h2>
          <ol className="steps">
            {[
              "기존에 이용하던 채널의 주소와 최근 공지를 먼저 확인합니다.",
              "링크를 열기 전 표시 목적지와 열린 뒤 주소창 호스트를 비교합니다.",
              "Linktree·Telegram·사이트 안 공지가 같은 호스트를 가리키는지 봅니다.",
              "일치하지 않으면 로그인, 결제, 앱 설치를 보류하고 다시 확인합니다.",
            ].map((step, index) => (
              <li key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="article-section article-next">
          <h2>주소보다 지역 탐색이 목적이라면</h2>
          <p>
            주소를 확정하지 못한 상태에서도 부산·경남의 이동 구조는 독립적으로
            이해할 수 있습니다. <Link href="/regions">생활권 가이드</Link>에서
            출발지와 귀가 방향을 먼저 정하고, 커뮤니티 글은{" "}
            <Link href="/board-guide">게시판 읽기</Link>에서 최근성과 반복
            패턴을 확인하세요.
          </p>
        </section>
      </div>
    </main>
  );
}
