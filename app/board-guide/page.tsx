import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleHeader,
  BamdalinPanel,
  Breadcrumb,
} from "../components/SiteChrome";
import {
  SITE,
  absoluteUrl,
  breadcrumbSchema,
  jsonLd,
  pageMetadata,
} from "../site";

const title = "부산달리기 게시판과 후기를 읽는 기준";
const description =
  "부달 게시판의 공지·상단광고·후기·질문을 역할별로 구분하고, 좋은 글과 주의 글의 문장 패턴, 부달주소 확인 후 읽기 순서와 FAQ를 정리한 커뮤니티 탐색 가이드입니다.";

export const metadata: Metadata = pageMetadata(
  title,
  description,
  "/board-guide",
);

const boardRoles = [
  {
    title: "공지",
    body: "운영·점검·주소·규정처럼 채널이 공식으로 내건 안내입니다. 작성자·고정 여부·최근 수정 시점을 먼저 보고, 광고성 상단 노출과 섞어 읽지 않습니다.",
  },
  {
    title: "상단광고",
    body: "노출 위치와 문구 길이가 정보 품질을 대신하지 않습니다. “추천”, “검증”, “1위” 같은 표현이 있어도 이용자 순위나 최근성 신호로 보지 않습니다.",
  },
  {
    title: "후기",
    body: "방문·대기·이동·변경처럼 확인 가능한 사실이 분리되어 있는지를 봅니다. 활발한 반응보다 구체적 시점과 반복되는 사실 기록이 더 중요합니다.",
  },
  {
    title: "질문",
    body: "질문이 쌓인다는 것은 관심이 있다는 신호일 뿐, 답이 검증됐다는 뜻은 아닙니다. 답글의 작성 이력·구체성·다른 글과의 독립 여부를 따로 확인합니다.",
  },
];

const readingExamples = [
  {
    topic: "시점",
    good: "“어제 저녁 서면 쪽에서 대기 약 20분, 이전보다 줄이 짧아졌음.”처럼 언제·어디서·무엇을 적음",
    caution: "“오늘도 최고! 무조건 추천”처럼 날짜만 바뀌고 내용이 매번 같은 짧은 찬사",
  },
  {
    topic: "구체성",
    good: "지역·대기·이동·변경 여부를 항목처럼 나눠 적고, 모르는 부분은 모른다고 표시함",
    caution: "“공식 인증”, “진짜 최신”, “검증 완료”만 반복하고 확인한 사실이 없음",
  },
  {
    topic: "작성 이력",
    good: "서로 다른 작성자가 비슷한 대기·이동 사실을 다른 표현으로 남김",
    caution: "짧은 시간에 같은 문장·같은 링크가 여러 게시판에 복제됨",
  },
  {
    topic: "역할 구분",
    good: "공지란과 광고 영역을 제외한 뒤, 이용자 후기만 모아 시점을 비교함",
    caution: "상단 노출 목록을 “이용자 랭킹”처럼 읽고 그대로 확정함",
  },
];

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

const FAQ = [
  {
    q: "조회 수가 높은 글이 더 믿을 만한가요?",
    a: "조회 수는 관심의 크기이지 정확성의 증거가 아닙니다. 최근 작성 시점, 구체적 사실, 서로 다른 작성자의 독립 기록이 겹치는지를 먼저 봅니다.",
  },
  {
    q: "상단에 고정된 글은 공지로 봐도 되나요?",
    a: "고정·상단 노출은 공지일 수도 있고 광고성 배치일 수도 있습니다. 작성 주체, 문구의 역할, 다른 공지와의 일치를 확인하기 전에는 이용자 후기와 같은 무게로 읽지 마세요.",
  },
  {
    q: "부달주소가 아직 재확인 필요할 때도 게시판을 봐도 되나요?",
    a: "됩니다. 다만 주소 확정과 게시판 탐색은 순서를 나누는 편이 안전합니다. 공개 채널에서 호스트 대조를 먼저 하고, 로그인·결제 전에는 게시판의 주소 댓글만으로 확정하지 마세요.",
  },
  {
    q: "같은 문장이 여러 곳에 보이면 신뢰도가 올라가나요?",
    a: "반대로 복제 신호일 수 있습니다. 짧은 기간에 표현·링크·맞춤법까지 같다면 독립 확인으로 보지 않고, 문장은 달라도 같은 사실(대기·이동·변경)이 반복되는지를 봅니다.",
  },
];

export default function BoardGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title,
        description,
        dateModified: SITE.reviewedAt,
        inLanguage: "ko-KR",
        mainEntityOfPage: absoluteUrl("/board-guide"),
        url: absoluteUrl("/board-guide"),
        author: {
          "@type": "Organization",
          name: SITE.koreanName,
          url: SITE.url,
        },
      },
      breadcrumbSchema([
        { name: "홈", path: "/" },
        { name: "게시판 읽기", path: "/board-guide" },
      ]),
      {
        "@type": "FAQPage",
        mainEntity: FAQ.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
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
          <h2>게시판 역할 지도</h2>
          <p>
            부달·부산달리기 관련 커뮤니티는 한 화면에 서로 다른 목적의 글이
            섞여 있는 경우가 많습니다. 먼저 화면을 공지·상단광고·후기·질문으로
            나눠 두고, 같은 신뢰도로 읽지 않는 것이 기본입니다. 역할을 고정한
            뒤에야 “최근성”과 “구체성”을 비교할 수 있습니다.
          </p>
          <div className="signal-cards">
            {boardRoles.map((role) => (
              <article key={role.title}>
                <h3>{role.title}</h3>
                <div>
                  <span>읽는 법</span>
                  <p>{role.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

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
          <h2>실제 읽기 예시: 좋은 글 vs 주의 글</h2>
          <p>
            아래는 실제 문장 패턴을 단순화한 예시입니다. 특정 업소나 주소를
            지목하지 않으며, “이런 문장이면 무엇을 더 볼지”를 연습하기 위한
            대조표입니다.
          </p>
          <div className="signal-cards">
            {readingExamples.map((row) => (
              <article key={row.topic}>
                <h3>{row.topic}</h3>
                <div>
                  <span>좋은 글</span>
                  <p>{row.good}</p>
                </div>
                <div>
                  <span>주의 글</span>
                  <p>{row.caution}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="article-section">
          <h2>부달주소 확인 후 게시판을 볼 때의 순서</h2>
          <p>
            주소가 불확실한 날에도 게시판은 열 수 있지만, 주소 댓글·서명
            링크를 곧바로 확정 근거로 쓰면 관찰과 추측이 섞입니다. 공개 채널
            대조를 마친 뒤, 아래 순서로 게시판을 읽는 편이 덜 헷갈립니다.
          </p>
          <ol className="steps">
            {[
              "Linktree·Telegram·기존 채널에서 표시 호스트를 먼저 대조합니다. 상태가 “재확인 필요”이면 로그인·결제를 보류한 채 게시판만 읽습니다.",
              "부산·경남 생활권을 하나로 고정합니다. 서면·전포, 해운대·수영, 사상·김해, 동래·양산처럼 귀가 방향을 먼저 정하면 후보 글의 범위가 줄어듭니다.",
              "공지와 상단광고 영역을 제외하고, 이용자 후기·질문의 작성 시점을 봅니다. 날짜만 바뀐 짧은 찬사는 최근성 신호에서 뺍니다.",
              "한 건의 평가보다 여러 작성자에게 반복되는 구체적 사실(대기, 이동, 변경)을 찾습니다. 같은 문장 복제와 독립 사실 반복을 구분합니다.",
              "최종 정보는 게시판 글이 아닌 현재 화면과 원 출처에서 다시 확인합니다. 주소창 호스트·공지 문구·확인일을 한 줄로 남깁니다.",
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

        <section className="article-section faq-layout">
          <div>
            <p className="issue-label">FAQ</p>
            <h2>게시판을 읽기 전에 묻는 질문</h2>
            <p>
              아래 답변은 이 노트의 편집 기준과 {SITE.reviewedAt} 검토에 맞춰
              정리했습니다. 채널·게시판 구성이 바뀌면 역할 구분도 다시 확인해야
              합니다.
            </p>
          </div>
          <div className="faq-list">
            {FAQ.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <BamdalinPanel />

        <section className="article-section article-next">
          <h2>지역 맥락을 먼저 정하지 않았다면</h2>
          <p>
            <Link href="/regions">부산·경남 생활권 지도</Link>에서 출발지와 귀가
            방향을 고정한 뒤 다시 게시판으로 돌아오세요. 주소 자체가 불확실하면{" "}
            <Link href="/address-log">공개 채널 관찰 기록</Link>을 먼저 읽어야
            합니다. 확정·보류·정정 창구는{" "}
            <Link href="/editorial">편집 기준</Link>에 모아 두었습니다.
          </p>
        </section>
      </div>
    </main>
  );
}
