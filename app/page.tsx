import type { Metadata } from "next";
import Link from "next/link";
import { ChannelButtons } from "./components/SiteChrome";
import { HOME_FAQ_SUMMARY } from "./faq-data";
import { SITE, jsonLd, pageMetadata } from "./site";

const homeTitle = `부달주소 관찰노트 | 확인 ${SITE.reviewedAt}`;

export const metadata: Metadata = pageMetadata(
  homeTitle,
  SITE.description,
  "/",
);

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": SITE.url + "/#webpage",
        name: homeTitle,
        url: SITE.url,
        description: SITE.description,
        dateModified: SITE.reviewedAt,
        inLanguage: "ko-KR",
        isPartOf: { "@id": SITE.url + "/#website" },
        about: [
          { "@type": "Thing", name: "부달주소 관찰" },
          { "@type": "Thing", name: "부산달리기 공개채널" },
          { "@type": "Thing", name: "생활권 허브" },
          { "@type": "Thing", name: "밤달 Telegram CS" },
        ],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: SITE.url + "/og.png",
        },
      },
      {
        "@type": "HowTo",
        name: "부달주소 확인 3단계",
        description:
          "공개 채널 확인, 호스트 대조, 관찰 허브 북마크 순서로 부달주소를 점검합니다.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "공개 채널 확인",
            text: "밤의달인(밤달) 목록과 생활권 허브·Telegram CS의 최근 안내를 구분해 확인합니다.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "호스트 대조",
            text: "표시 목적지와 주소창 호스트를 비교하고, 채널 간 일치 여부를 기록합니다.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "관찰 허브 북마크",
            text: "숫자형 도메인 추측 대신 이 관찰 허브와 검증된 채널을 즐겨찾기에 둡니다.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": SITE.url + "/#faq",
        mainEntity: HOME_FAQ_SUMMARY.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <section className="hero">
        <div className="wrap hero-layout">
          <div className="hero-copy">
            <p className="issue-label">
              ISSUE 01 · PUBLIC CHANNEL REVIEW · {SITE.reviewedAt}
            </p>
            <h1>
              부달주소 공개채널
              <br />
              <em>관찰노트</em>
            </h1>
            <p>
              밤의달인(밤달) 목록과 생활권 허브(norangbudal)·Telegram CS(@bamdalincs)를 구분해 안내하고, 공개
              출처에 적힌 부달·부산달리기 주소 주장을 날짜별로 대조합니다. 채널이
              서로 어긋나면 공식 호스트를 단정하지 않고 보류합니다. 접속·모바일·사칭
              점검은 아래 노트로 나눕니다.
            </p>
            <div className="button-row">
              <a
                href={SITE.alternativeUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="button coral-button"
              >
                밤달 부산 목록
              </a>
              <Link href="/address-log" className="button dark-button">
                관찰 기록 보기
              </Link>
              <Link href="/access" className="button line-button">
                접속 점검
              </Link>
              <Link href="/safety" className="button line-button">
                사칭 주의
              </Link>
            </div>
          </div>

          <aside className="review-card" aria-label="현재 검토 상태">
            <div className="review-card-head">
              <span>REVIEW STATUS</span>
              <strong>{SITE.status}</strong>
            </div>
            <div className="review-card-body">
              <p>
                {SITE.reviewedAt} 기준 공개 채널 표기가 서로 달라 단일 공식
                호스트를 확정하지 않았습니다. 지역 목록은 밤의달인(밤달,{" "}
                <strong>bamdalin.com</strong>)에서 별도로 확인하세요.
              </p>
              <ul>
                <li>상태: {SITE.status}</li>
                <li>확인일: {SITE.reviewedAt}</li>
                <li>바로가기: 밤의달인(밤달) 부산 목록</li>
                <li>
                  보조: {SITE.linktreeLabel} · {SITE.telegramLabel}
                </li>
              </ul>
            </div>
            <ChannelButtons />
          </aside>
        </div>
      </section>

      <section className="ticker" aria-label="핵심 편집 원칙">
        <div className="wrap ticker-row">
          <span>추측하지 않기</span>
          <span>출처를 나란히 보기</span>
          <span>확인일 남기기</span>
          <span>플랫폼 관계 밝히기</span>
        </div>
      </section>

      <section className="section wrap">
        <div className="section-intro">
          <p className="issue-label">3-STEP ACCESS</p>
          <h2>부달주소를 확인할 때 쓰는 세 단계</h2>
          <p>
            빠른 우회주소 검색보다, 채널 확인 → 호스트 대조 → 관찰 허브 북마크
            순서가 사칭·오래된 도메인 위험을 줄입니다.
          </p>
        </div>
        <ol className="steps">
          {[
            {
              title: "공개 채널 확인",
              body: "밤의달인(밤달) 목록을 우선 보고, 생활권 허브·Telegram CS 안내는 보조로 확인합니다.",
            },
            {
              title: "호스트 대조",
              body: "표시 목적지와 주소창 호스트를 비교하고, 채널 간 일치 여부를 한 줄로 기록합니다.",
            },
            {
              title: "관찰 허브 북마크",
              body: "숫자형 다음 주소를 추측해 고정하지 말고, 이 허브와 검증된 채널을 즐겨찾기에 둡니다.",
            },
          ].map((step, index) => (
            <li key={step.title}>
              <span>{index + 1}</span>
              <p>
                <strong>{step.title}.</strong> {step.body}
              </p>
            </li>
          ))}
        </ol>
        <div className="button-row" style={{ marginTop: "1.5rem" }}>
          <Link href="/bookmark" className="button line-button">
            즐겨찾기 기준
          </Link>
          <Link href="/mobile" className="button line-button">
            모바일 접속
          </Link>
          <Link href="/access" className="button line-button">
            접속이 안 될 때
          </Link>
        </div>
      </section>

      <section className="section wrap">
        <div className="section-intro">
          <p className="issue-label">READING MAP</p>
          <h2>주소 이후의 질문까지 노트로 나눴습니다.</h2>
        </div>
        <div className="notes-grid">
          {[
            {
              href: "/address-log",
              number: "NOTE 01",
              title: "주소 관찰",
              body: "공개 채널의 주소 주장을 나란히 놓고 확정·보류 기준을 설명합니다.",
            },
            {
              href: "/access",
              number: "NOTE 02",
              title: "접속 점검",
              body: "캐시·DNS·호스트 불일치·보안 경고를 우회주소 추측 없이 점검합니다.",
            },
            {
              href: "/safety",
              number: "NOTE 03",
              title: "안전·사칭",
              body: "채널·호스트 대조 5단계와 로그인·결제 전 중단 신호를 정리합니다.",
            },
            {
              href: "/mobile",
              number: "NOTE 04",
              title: "모바일",
              body: "홈 화면에는 숫자형 도메인보다 관찰 허브를 고정하는 순서를 안내합니다.",
            },
            {
              href: "/bookmark",
              number: "NOTE 05",
              title: "즐겨찾기",
              body: "오래된 호스트 북마크 위험과 허브·공개채널 고정 기준을 남깁니다.",
            },
            {
              href: "/faq",
              number: "NOTE 06",
              title: "FAQ",
              body: "확정 전에 묻는 질문을 한곳에 모았습니다.",
            },
            {
              href: "/regions",
              number: "NOTE 07",
              title: "부산·경남 생활권",
              body: "출발·귀가 방향으로 후보 범위를 줄이는 이동 기준을 정리합니다.",
            },
            {
              href: "/board-guide",
              number: "NOTE 08",
              title: "게시판 읽기",
              body: "후기의 활동 시점, 반복 패턴, 공지와 광고 영역을 구분하는 법입니다.",
            },
          ].map((note) => (
            <Link key={note.href} href={note.href} className="note-card">
              <span>{note.number}</span>
              <h3>{note.title}</h3>
              <p>{note.body}</p>
              <strong>OPEN NOTE ↗</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <div className="section-intro">
          <p className="issue-label">FIELD GUIDE</p>
          <h2>부달주소를 찾을 때 먼저 정리할 세 가지</h2>
          <p>
            검색창에 “부달주소”나 “부산달리기 최신주소”를 치면 안내 문구가 길게
            이어집니다. 문제는 문구의 길이가 아니라, 서로 다른 사이트가 같은
            단어로 다른 호스트를 가리키는 경우가 있다는 점입니다.
          </p>
        </div>
        <div className="two-column">
          <div>
            <h3>1. 검색어와 호스트를 분리한다</h3>
            <p>
              부달·부산달리기는 검색 의도로는 자주 겹치지만, 검색 결과 페이지의
              제목·설명·실제 도메인은 별개입니다. “공식”, “최신”, “인증” 같은
              수식어가 붙었더라도 운영 주체가 공개되어 있지 않으면 그 표현만으로
              확정하지 않습니다.
            </p>
            <h3>2. 확인일을 주소와 같이 기록한다</h3>
            <p>
              주소 정보는 날짜가 빠지면 빠르게 쓸모가 줄어듭니다. 이 사이트의
              현재 검토일은 {SITE.reviewedAt}이며, 이후 채널 문구가 바뀌면
              상태가 달라질 수 있습니다.
            </p>
          </div>
          <div>
            <h3>3. 이동 범위는 지리 가이드로 넘긴다</h3>
            <p>
              주소 탐색과 지역 탐색을 동시에 섞으면 후보가 과하게 넓어집니다.
              구·군·지하철 축·귀가 방향의 상세는{" "}
              <a
                href={SITE.geographyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                norangbudal.com
              </a>
              과 이 사이트의 <Link href="/regions">생활권 노트</Link>로
              나눕니다.
            </p>
            <h3>4. 게시판은 역할별로 읽는다</h3>
            <p>
              상단 노출·공지·이용자 후기·질문 글을 같은 신뢰도로 읽지 마세요.
              자세한 기준은 <Link href="/board-guide">게시판 읽기</Link>에
              정리했습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="section-intro">
          <p className="issue-label">CHANNEL CHECK</p>
          <h2>공개 채널을 대조할 때의 실무 순서</h2>
        </div>
        <ol className="steps">
          {[
            "기존에 이용하던 채널의 최근 공지와 표시 주소를 먼저 확인합니다.",
            "링크를 열기 전 미리보기·표시 목적지와, 연 뒤 주소창의 실제 호스트를 비교합니다.",
            "밤의달인(밤달) 목록·생활권 허브·Telegram CS·사이트 안 안내가 같은 호스트를 가리키는지 구분해 봅니다.",
            "보안 경고, 예기치 않은 앱 설치 유도, 로그인·결제 요청이 보이면 입력을 중단합니다.",
            "일치하지 않으면 단일 공식 호스트를 확정하지 않고 “재확인 필요”로 둡니다.",
          ].map((step, index) => (
            <li key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
        <p style={{ marginTop: "1rem" }}>
          원문 관찰 표는 <Link href="/address-log">주소 관찰 기록</Link>에
          있습니다.
        </p>
      </section>

      <section className="section region-preview">
        <div className="wrap">
          <div className="section-intro compact-intro">
            <p className="issue-label">REGION FIRST</p>
            <h2>부산 전체보다 귀가 방향을 먼저 정합니다.</h2>
            <p>
              서면·전포 중심권, 해운대·수영 동부권, 사상·김해 서부 연결권,
              동래·양산 북부 연결권처럼 귀가 방향을 먼저 정하면 후보 범위가
              현실적으로 줄어듭니다. 노선·구·군 상세는 지리 사이트로 이어집니다.
            </p>
          </div>
          <div className="region-band">
            {[
              ["CENTER", "서면·전포", "1·2호선 환승"],
              ["EAST", "해운대·수영", "2호선·동해선"],
              ["WEST", "사상·강서", "김해·창원 연결"],
              ["NORTH", "동래·양산", "1호선·부산 북부"],
            ].map(([label, area, line]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{area}</strong>
                <small>{line}</small>
              </div>
            ))}
          </div>
          <div className="button-row">
            <Link href="/regions" className="text-link">
              생활권 노트 →
            </Link>
            <a
              href={`${SITE.geographyUrl}/guide/transit`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              이동축 가이드 →
            </a>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="section-intro">
          <p className="issue-label">WHY THIS NOTE</p>
          <h2>공식 선언 대신 관찰 기록을 남기는 이유</h2>
        </div>
        <div className="two-column">
          <div>
            <p>
              부산달리기·부달주소 관련 검색 결과는 “지금 바로 접속할 주소”를
              강조하는 경우가 많습니다. 공개 채널이 서로 다른 호스트를 보여 주는
              상황에서는 빠른 답이 곧 잘못된 확정이 될 수 있습니다. 이 노트는
              확인한 것과 확인하지 못한 것을 구분합니다.
            </p>
            <p>
              현재 상태인 “{SITE.status}”는 정보가 없다는 뜻이 아니라, 공개
              출처 간 일치가 부족해 단일 공식 호스트를 찍지 않았다는 뜻입니다.
            </p>
          </div>
          <ul className="boxed-list">
            <li>공개로 열 수 있는 출처만 사용</li>
            <li>상충하면 확정하지 않고 보류</li>
            <li>확인일과 채널명을 함께 표기</li>
            <li>별개 플랫폼 관계를 분명히 고지</li>
            <li>지리·게시판 기준은 주소와 분리 제공</li>
          </ul>
        </div>
      </section>

      <section className="section wrap alternative-panel">
        <div>
          <p className="issue-label">SEPARATE PLATFORM</p>
          <h2>밤의달인(밤달) 지역 목록</h2>
          <p>
            부산·경남·울산 정보는 밤의달인(밤달,{" "}
            <strong>bamdalin.com</strong>) 해당 지역 목록에서 확인할 수
            있습니다. 부달 공식 주소 대체가 아닙니다.
          </p>
        </div>
        <div className="button-row">
          <a
            href={SITE.alternativeUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="button coral-button"
          >
            부산 목록
          </a>
          <a
            href={SITE.gyeongnamListingUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="button line-button"
          >
            경남 목록
          </a>
          <a
            href={SITE.ulsanListingUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="button line-button"
          >
            울산 목록
          </a>
        </div>
      </section>

      <section className="section wrap faq-layout">
        <div className="section-intro">
          <p className="issue-label">FAQ</p>
          <h2>확정하기 전에 묻는 질문</h2>
          <p>
            요약만 모았습니다. 전체 질문과 접속·모바일·사칭 항목은{" "}
            <Link href="/faq">FAQ 전체</Link>에서 이어집니다.
          </p>
        </div>
        <div className="faq-list">
          {HOME_FAQ_SUMMARY.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <div className="section-intro">
          <p className="issue-label">NEXT READ</p>
          <h2>다음에 읽을 노트</h2>
          <p>
            주소 주장의 근거는 <Link href="/address-log">주소 관찰</Link>,
            접속 문제는 <Link href="/access">접속 점검</Link>, 사칭 의심은{" "}
            <Link href="/safety">안전</Link>, 편집 원칙은{" "}
            <Link href="/editorial">편집 기준</Link>에 있습니다. 구·군·노선
            상세는{" "}
            <a href={SITE.geographyUrl} target="_blank" rel="noopener noreferrer">
              norangbudal.com
            </a>
            으로 이어집니다.
          </p>
        </div>
      </section>
    </main>
  );
}
