import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleHeader,
  BamdalinPanel,
  Breadcrumb,
  RelatedSpokes,
  ReviewStatusAside,
} from "../components/SiteChrome";
import { FULL_FAQ } from "../faq-data";
import {
  SITE,
  absoluteUrl,
  breadcrumbSchema,
  jsonLd,
  pageMetadata,
} from "../site";

const title = "부달주소 FAQ | 확정 전에 묻는 질문";
const description =
  "부달주소·부산달리기 관찰 노트 FAQ. 주소 확정 보류, 공개 채널 대조, 접속·모바일·즐겨찾기·사칭 점검을 한곳에 모았습니다.";

export const metadata: Metadata = pageMetadata(title, description, "/faq");

export default function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        url: absoluteUrl("/faq"),
        name: title,
        description,
        dateModified: SITE.reviewedAt,
        inLanguage: "ko-KR",
      },
      breadcrumbSchema([
        { name: "홈", path: "/" },
        { name: "FAQ", path: "/faq" },
      ]),
      {
        "@type": "FAQPage",
        mainEntity: FULL_FAQ.map((item) => ({
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
        <Breadcrumb current="FAQ" />
        <ArticleHeader
          issue="FIELD NOTE · FAQ"
          title={title}
          lead={`아래 답변은 이 노트의 편집 기준과 ${SITE.reviewedAt} 공개 채널 검토에 맞춰 정리했습니다. 채널 문구가 바뀌면 주소 관련 답변도 다시 확인해야 합니다.`}
        />
        <ReviewStatusAside />

        <section className="article-section">
          <h2>주제별 노트</h2>
          <p>
            접속이 안 되면 <Link href="/access">접속 점검</Link>, 모바일은{" "}
            <Link href="/mobile">모바일</Link>, 북마크는{" "}
            <Link href="/bookmark">즐겨찾기</Link>, 사칭 의심은{" "}
            <Link href="/safety">안전</Link>, 채널 대조 원문은{" "}
            <Link href="/address-log">주소 관찰</Link>을 보세요.
          </p>
        </section>

        <section className="article-section">
          <h2>자주 묻는 질문</h2>
          <div className="faq-list">
            {FULL_FAQ.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <BamdalinPanel />
        <RelatedSpokes exclude={["/faq"]} />
      </div>
    </main>
  );
}
