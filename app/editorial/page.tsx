import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader, Breadcrumb } from "../components/SiteChrome";
import { SITE, jsonLd, pageMetadata } from "../site";

const title = "부달주소 관찰노트의 편집 기준";
const description =
  "부달주소 관찰노트의 운영 관계, 공개 출처 우선순위, 주소 확정과 보류 기준, 변경 기록과 정정 요청 방법을 공개합니다.";

export const metadata: Metadata = pageMetadata(
  title,
  description,
  "/editorial",
);

export default function EditorialPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: title,
    description,
    dateModified: SITE.reviewedAt,
    inLanguage: "ko-KR",
    url: new URL("/editorial", SITE.url).toString(),
  };

  return (
    <main id="main-content" className="article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <div className="wrap article-wrap">
        <Breadcrumb current="편집 기준" />
        <ArticleHeader
          issue="NOTE 04 · EDITORIAL"
          title={title}
          lead="공식이라고 대신 선언하지 않고 공개 출처가 일치할 때만 확인 범위를 좁히는 독립 편집 노트입니다."
        />

        <section className="article-section">
          <h2>운영 관계와 작성 주체</h2>
          <p>
            BUDAL FIELDNOTE는 부산달리기 운영 주체와 무관합니다. 공개 웹페이지,
            Linktree, Telegram 등 이용자가 직접 열 수 있는 자료를 대조해 관찰
            기록을 작성합니다. 개별 업소를 평가하거나 특정 주소의 소유권을
            인증하지 않습니다. 정정 요청은{" "}
            <a href={"mailto:" + SITE.email}>{SITE.email}</a>로 받습니다.
          </p>
        </section>

        <section className="article-section two-column">
          <div>
            <h2>확정 조건</h2>
            <p>
              서로 독립적인 공개 채널 두 곳 이상이 같은 호스트를 표시하고,
              서비스 내부 공지와도 일치할 때만 “공개 채널에서 일치 확인”으로
              기록합니다.
            </p>
          </div>
          <div>
            <h2>보류 조건</h2>
            <p>
              주소가 서로 다르거나 숫자형 다음 주소만 예고된 경우, 운영 관계를
              알 수 없는 안내 사이트만 근거인 경우에는 단일 주소를 확정하지
              않습니다.
            </p>
          </div>
        </section>

        <section className="article-section">
          <h2>사용한 공개 출처</h2>
          <div className="editorial-sources">
            <a
              href={SITE.linktreeUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <span>01</span>
              <strong>Linktree @busandal</strong>
              <small>공개 링크 채널</small>
            </a>
            <a
              href={SITE.telegramUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <span>02</span>
              <strong>Telegram @budalinfo</strong>
              <small>공개 게시 채널</small>
            </a>
          </div>
        </section>

        <section className="article-section">
          <h2>변경 기록</h2>
          <div className="change-log">
            <time dateTime="2026-08-03">2026.08.03</time>
            <p>
              공개 채널 대조 결과를 “재확인 필요”로 기록하고, 생활권·게시판
              가이드와 플랫폼 관계 고지를 작성했습니다.
            </p>
          </div>
        </section>

        <section className="article-section article-next">
          <h2>검토 결과부터 보려면</h2>
          <p>
            <Link href="/address-log">주소 관찰 기록</Link>에서 공개 출처별 주장과
            단일 호스트 확정을 보류한 이유를 확인할 수 있습니다.
          </p>
        </section>
      </div>
    </main>
  );
}
