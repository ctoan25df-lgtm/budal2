import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader, Breadcrumb } from "../components/SiteChrome";
import { SITE, jsonLd, pageMetadata } from "../site";

const title = "부산달리기 게시판과 후기를 읽는 기준";
const description =
  "부달 게시판의 공지, 광고성 상단 노출, 활동 회원 후기, 오래된 정보와 최근 변경을 구분하는 커뮤니티 탐색 기준입니다.";

export const metadata: Metadata = pageMetadata(
  title,
  description,
  "/board-guide",
);

const signals = [
  {
    title: "작성 시점",
    good: "최근 방문·변경 시점이 구체적으로 적혀 있음",
    caution: "오래된 글이 날짜만 바뀌어 반복 노출됨",
  },
  {
    title: "구체성",
    good: "지역, 대기, 이동, 실제 확인 항목이 분리되어 있음",
    caution: "최고·공식·검증 같은 평가어만 반복됨",
  },
  {
    title: "작성 이력",
    good: "서로 다른 작성자가 비슷한 사실을 독립적으로 남김",
    caution: "짧은 기간에 같은 문장과 링크가 여러 게시판에 복제됨",
  },
  {
    title: "정보 역할",
    good: "공지·광고·후기·질문 영역이 화면에서 구분됨",
    caution: "광고성 상단 노출을 이용자 순위처럼 표현함",
  },
];

export default function BoardGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    dateModified: SITE.reviewedAt,
    inLanguage: "ko-KR",
    mainEntityOfPage: new URL("/board-guide", SITE.url).toString(),
  };

  return (
    <main id="main-content" className="article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <div className="wrap article-wrap">
        <Breadcrumb current="게시판 읽기" />
        <ArticleHeader
          issue="NOTE 03 · BOARD READING"
          title={title}
          lead="게시판의 활발함과 개별 정보의 정확성은 같은 말이 아닙니다. 글의 역할과 시점을 분리해 읽습니다."
        />

        <section className="article-section">
          <h2>네 가지 신호를 나란히 봅니다</h2>
          <div className="signal-cards">
            {signals.map((signal) => (
              <article key={signal.title}>
                <h3>{signal.title}</h3>
                <div>
                  <span>확인할 신호</span>
                  <p>{signal.good}</p>
                </div>
                <div>
                  <span>주의할 신호</span>
                  <p>{signal.caution}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="article-section">
          <h2>후보를 줄이는 실제 순서</h2>
          <ol className="steps">
            {[
              "부산·경남 생활권을 먼저 하나로 고정합니다.",
              "공지와 광고 영역을 제외하고 이용자 글의 작성 시점을 봅니다.",
              "한 건의 평가보다 여러 작성자에게 반복되는 구체적 사실을 찾습니다.",
              "최종 정보는 게시판 글이 아닌 현재 화면과 원 출처에서 다시 확인합니다.",
            ].map((step, index) => (
              <li key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <aside className="pull-quote">
          <p>
            조회 수는 관심을 설명하고, 구체적인 최근 기록은 판단을 돕습니다.
            둘을 같은 순위로 읽지 마세요.
          </p>
        </aside>

        <section className="article-section article-next">
          <h2>지역 맥락을 먼저 정하지 않았다면</h2>
          <p>
            <Link href="/regions">부산·경남 생활권 지도</Link>에서 출발지와 귀가
            방향을 고정한 뒤 다시 게시판으로 돌아오세요. 주소 자체가 불확실하면{" "}
            <Link href="/address-log">공개 채널 관찰 기록</Link>을 먼저 읽어야
            합니다.
          </p>
        </section>
      </div>
    </main>
  );
}
