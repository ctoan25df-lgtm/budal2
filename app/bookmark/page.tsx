import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleHeader,
  BamdalinPanel,
  Breadcrumb,
  RelatedSpokes,
  ReviewStatusAside,
} from "../components/SiteChrome";
import {
  SITE,
  absoluteUrl,
  breadcrumbSchema,
  jsonLd,
  pageMetadata,
} from "../site";

const title = "부달주소 즐겨찾기 | 관찰 허브를 북마크하는 이유";
const description =
  "부달·부산달리기 주소를 북마크할 때 숫자형 도메인 고정의 위험과, 관찰 허브·공개 채널을 즐겨찾기에 두는 기준을 정리합니다.";

export const metadata: Metadata = pageMetadata(title, description, "/bookmark");

const FAQ = [
  {
    q: "지금 열리는 주소를 바로 즐겨찾기해도 되나요?",
    a: "열렸다 = 확정이 아닙니다. 공개 채널과 호스트가 겹치는지 확인한 뒤에만, 확인일과 함께 기록하세요. 불일치하면 허브만 북마크합니다.",
  },
  {
    q: "즐겨찾기 이름은 어떻게 적나요?",
    a: "‘부달 최신’처럼 단정 표현보다 ‘부달 관찰허브’ ‘norangbudal’ ‘bamdalincs’처럼 출처가 보이게 적으면, 나중에 어떤 근거로 저장했는지 추적하기 쉽습니다.",
  },
  {
    q: "여러 기기에 같은 북마크를 동기화해도 되나요?",
    a: "동기화 자체는 문제 없지만, 오래된 호스트가 함께 퍼질 수 있습니다. 허브를 기준으로 두고, 개별 도메인은 확인일을 주기로 정리하세요.",
  },
];

export default function BookmarkPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        url: absoluteUrl("/bookmark"),
        name: title,
        description,
        dateModified: SITE.reviewedAt,
        inLanguage: "ko-KR",
      },
      breadcrumbSchema([
        { name: "홈", path: "/" },
        { name: "즐겨찾기", path: "/bookmark" },
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
        <Breadcrumb current="즐겨찾기" />
        <ArticleHeader
          issue="FIELD NOTE · BOOKMARK"
          title={title}
          lead="주소가 자주 바뀌는 환경에서 가장 위험한 북마크는 ‘예전에 열렸던 숫자형 도메인’입니다. 관찰 허브와 공개 채널을 먼저 고정하세요."
        />
        <ReviewStatusAside />

        <section className="article-section">
          <h2>권장하는 즐겨찾기</h2>
          <ul className="boxed-list">
            <li>
              이 관찰 허브 ({SITE.url}) — 확인일·상태·관련 노트를 다시 볼 수
              있습니다.
            </li>
            <li>
              기존에 대조한{" "}
              <a href={SITE.linktreeUrl} target="_blank" rel="noopener noreferrer">
                {SITE.linktreeLabel}
              </a>
              ·
              <a href={SITE.telegramUrl} target="_blank" rel="noopener noreferrer">
                {SITE.telegramLabel}
              </a>{" "}
              (@bamdalincs)
            </li>
            <li>
              지역 목록 비교용 밤의달인(밤달) — 부달 공식 주소 대체가 아님을
              이름에 남겨 둡니다.
            </li>
          </ul>
        </section>

        <section className="article-section">
          <h2>피해야 할 북마크 습관</h2>
          <p>
            검색 결과의 “공식 최신주소” 제목만 보고 저장하기, 숫자 +1로 예측한
            도메인을 미리 넣어 두기, 단축 URL만 북마크하기는 모두 호스트 추적을
            어렵게 만듭니다. 접속이 안 될 때는 북마크를 늘리기보다{" "}
            <Link href="/access">접속 점검</Link>과{" "}
            <Link href="/address-log">주소 관찰</Link>을 다시 적용하세요.
          </p>
        </section>

        <section className="article-section">
          <h2>PC·모바일에서 저장할 때</h2>
          <p>
            PC에서는 Ctrl/Cmd+D로 이 허브를 북마크 바에 두고, 모바일은{" "}
            <Link href="/mobile">모바일 노트</Link>의 홈 화면 추가를 사용합니다.
            폴더 이름은 “부달 관찰”처럼 출처가 보이게 하면, 나중에 사칭
            페이지와 섞였을 때 구분하기 쉽습니다.
          </p>
        </section>

        <section className="article-section">
          <h2>자주 묻는 질문</h2>
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
        <RelatedSpokes exclude={["/bookmark"]} />
      </div>
    </main>
  );
}
