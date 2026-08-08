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

const title = "부달주소 관찰노트의 편집 기준";
const description =
  "부달주소 관찰노트의 운영 관계, 편집 데스크 책임 범위, 주소 확정·보류 체크리스트, 정정 요청 템플릿, 변경 기록과 bamdalin.com 관계 고지를 공개합니다.";

export const metadata: Metadata = pageMetadata(
  title,
  description,
  "/editorial",
);

const confirmChecklist = [
  "서로 독립적인 공개 채널 두 곳 이상이 같은 호스트를 표시한다",
  "서비스 내부 공지·배너가 있다면 그 호스트와도 일치한다",
  "표시 목적지와 실제 주소창 호스트가 같다(중계·미리보기만으로 끝내지 않음)",
  "확인일·채널명·호스트를 한 줄로 기록할 수 있다",
  "보안 경고·과도한 권한 요청·갑작스러운 결제 유도가 없다",
];

const holdChecklist = [
  "공개 채널마다 표시 호스트가 서로 다르다",
  "한 채널이 여러 주소를 동시에 나열하고 우선순위가 없다",
  "숫자형 다음 주소만 예고되거나, +1 예측 입력을 유도한다",
  "운영 관계를 알 수 없는 검색 안내 사이트만 근거이다",
  "미리보기·단축 링크와 최종 호스트가 어긋난다",
];

export default function EditorialPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        name: title,
        description,
        dateModified: SITE.reviewedAt,
        inLanguage: "ko-KR",
        url: absoluteUrl("/editorial"),
        mainEntityOfPage: absoluteUrl("/editorial"),
        publisher: {
          "@type": "Organization",
          name: SITE.koreanName,
          url: SITE.url,
          email: SITE.email,
        },
      },
      breadcrumbSchema([
        { name: "홈", path: "/" },
        { name: "편집 기준", path: "/editorial" },
      ]),
      {
        "@type": "Organization",
        "@id": absoluteUrl("/editorial") + "#publisher",
        name: SITE.koreanName,
        url: SITE.url,
        email: SITE.email,
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
            Linktree 역할의 생활권 허브(norangbudal), Telegram CS(@bamdalincs)
            등 이용자가 직접 열 수 있는 자료를 대조해 관찰
            기록을 작성합니다. 개별 업소를 평가하거나 특정 주소의 소유권을
            인증하지 않습니다. 정정 요청은{" "}
            <a href={"mailto:" + SITE.email}>{SITE.email}</a>로 받습니다.
          </p>
        </section>

        <section className="article-section two-column">
          <div>
            <h2>편집 데스크가 하는 일</h2>
            <ul className="boxed-list">
              <li>공개로 열 수 있는 출처의 주소 주장을 나란히 기록</li>
              <li>출처가 일치·상충하는 지점과 확인일을 남김</li>
              <li>생활권·게시판 읽기처럼 주소와 분리된 탐색 기준을 제공</li>
              <li>별개 플랫폼(bamdalin.com)과의 관계를 명시적으로 고지</li>
              <li>정정 요청을 받아 공개 기록의 오류를 수정</li>
            </ul>
          </div>
          <div>
            <h2>편집 데스크가 하지 않는 일</h2>
            <ul className="boxed-list">
              <li>부산달리기 공식 대행·소유권·안전성 인증</li>
              <li>숫자형 다음 주소 예측이나 추측성 도메인 추천</li>
              <li>개별 업소 순위·추천·이용 후기 대행</li>
              <li>비공개 제보만으로 단일 공식 호스트 확정</li>
              <li>bamdalin.com을 부달·부산달리기 공식으로 표기</li>
            </ul>
          </div>
        </section>

        <section className="article-section two-column">
          <div>
            <h2>확정 체크리스트</h2>
            <p>
              아래를 모두 만족할 때만 “공개 채널에서 일치 확인”으로 기록합니다.
              하나라도 빠지면 확정보다 보류가 맞습니다.
            </p>
            <ul className="boxed-list">
              {confirmChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>보류 체크리스트</h2>
            <p>
              아래 중 하나라도 해당하면 단일 주소를 확정하지 않습니다. 현재
              상태 “{SITE.status}”는 이 조건이 남아 있다는 뜻입니다.
            </p>
            <ul className="boxed-list">
              {holdChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="article-section">
          <h2>사용한 공개 출처</h2>
          <div className="editorial-sources">
            <a
              href={SITE.linktreeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>01</span>
              <strong>생활권 허브 · norangbudal.com</strong>
              <small>밤달 지리·링크 허브</small>
            </a>
            <a
              href={SITE.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>02</span>
              <strong>Telegram @bamdalincs</strong>
              <small>밤의달인 CS</small>
            </a>
          </div>
        </section>

        <section className="article-section">
          <h2>정정 요청 템플릿</h2>
          <p>
            공개 기록에 사실 오류가 있으면{" "}
            <a href={"mailto:" + SITE.email}>{SITE.email}</a>로 알려 주세요.
            아래 정보를 함께 주시면 대조 속도가 빨라집니다. 비공개 제보만으로
            공식 호스트를 단정하지는 않으며, 이용자가 다시 열 수 있는 공개
            근거가 있을 때 기록을 수정합니다.
          </p>
          <ul className="boxed-list">
            <li>
              <strong>원문 URL</strong> — 오류가 있는 페이지 또는 인용한 공개
              출처 주소
            </li>
            <li>
              <strong>게시 주체</strong> — 채널명·사이트명·작성자로 확인 가능한
              표기
            </li>
            <li>
              <strong>날짜</strong> — 원문 게시일 또는 확인한 날짜
              (YYYY-MM-DD)
            </li>
            <li>
              <strong>어떤 오류인지</strong> — 잘못된 호스트, 날짜, 관계 고지,
              인용 문구 등 구체적으로
            </li>
          </ul>
        </section>

        <section className="article-section">
          <h2>밤의달인(밤달, bamdalin.com)과의 관계</h2>
          <p>
            밤의달인(밤달, bamdalin.com)은 부산달리기와 별개의 플랫폼입니다. 이
            사이트의 바로가기는 스폰서드(sponsored) 대안으로 연결되며, 부달·부산
            달리기 공식 주소라고 주장하지 않습니다. 주소 관찰·생활권·게시판
            가이드는 독립 편집 기록이고, 바로가기는 그 기록과 분리해 고지합니다.
          </p>
        </section>

        <BamdalinPanel />

        <section className="article-section">
          <h2>변경 기록</h2>
          <div className="change-log">
            <time dateTime="2026-08-03">2026.08.03</time>
            <p>
              공개 채널 대조 결과를 “재확인 필요”로 기록하고, 생활권·게시판
              가이드와 플랫폼 관계 고지를 작성했습니다.
            </p>
          </div>
          <div className="change-log">
            <time dateTime="2026-08-03">2026.08.03</time>
            <p>
              SEO·가이드 품질을 강화했습니다. 게시판 역할 지도와 읽기 예시,
              편집 데스크 책임 범위·확정/보류 체크리스트·정정 요청 템플릿,
              WebSite/Organization·Breadcrumb JSON-LD를 보강했습니다.
            </p>
          </div>
        </section>

        <section className="article-section article-next">
          <h2>검토 결과부터 보려면</h2>
          <p>
            <Link href="/address-log">주소 관찰 기록</Link>에서 공개 출처별 주장과
            단일 호스트 확정을 보류한 이유를 확인할 수 있습니다. 커뮤니티 글
            역할 구분은 <Link href="/board-guide">게시판 읽기</Link>, 출발지·귀가
            방향은 <Link href="/regions">생활권</Link>에서 이어집니다.
          </p>
        </section>
      </div>
    </main>
  );
}
