import type { Metadata } from "next";
import Link from "next/link";
import { SITE, jsonLd, pageMetadata } from "./site";

export const metadata: Metadata = pageMetadata(
  "부달주소 관찰 기록 | 공개 채널·생활권·게시판",
  SITE.description,
  "/",
);

const FAQ = [
  {
    q: "현재 부달주소를 하나로 확정할 수 있나요?",
    a: "2026년 8월 3일 검토에서는 공개 채널마다 표시하는 주소가 일치하지 않아 하나를 공식 주소로 확정하지 않았습니다. 숫자형 다음 주소를 추측하지 말고 기존에 이용하던 채널을 서로 대조하세요.",
  },
  {
    q: "부달과 부산달리기는 같은 검색 의도인가요?",
    a: "일반적으로 부달은 부산달리기를 줄여 부르는 검색어로 쓰입니다. 다만 이름이 같다는 이유만으로 모든 주소와 채널의 운영 주체가 같다고 볼 수는 없습니다.",
  },
  {
    q: "밤의달인은 부달 공식 주소인가요?",
    a: "아닙니다. 밤의달인은 부산달리기와 별개의 플랫폼이며 이 사이트에서는 지역 정보를 비교할 수 있는 다른 선택지로만 표시합니다.",
  },
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "부달주소 관찰 기록",
        url: SITE.url,
        description: SITE.description,
        dateModified: SITE.reviewedAt,
        inLanguage: "ko-KR",
      },
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
              부달주소,
              <br />
              <em>최신보다 변화 기록.</em>
            </h1>
            <p>
              “공식 최신주소”라는 제목은 많지만 공개 채널의 주장이 서로 다를 수
              있습니다. 하나를 억지로 확정하지 않고 어떤 출처가 무엇을 말하는지,
              언제 확인했는지를 기록합니다.
            </p>
            <div className="button-row">
              <Link href="/address-log" className="button dark-button">
                주소 관찰 기록
              </Link>
              <Link href="/regions" className="button line-button">
                부산·경남 생활권
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
                2026년 8월 3일 공개 검색 결과, Linktree와 Telegram 안내를
                대조했으나 표시 주소가 일치하지 않았습니다.
              </p>
              <ul>
                <li>공개 채널 존재 확인</li>
                <li>주소 주장 상충 확인</li>
                <li>단일 공식 호스트 확정 보류</li>
              </ul>
            </div>
            <Link href="/address-log">근거와 판정 범위 보기 →</Link>
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
          <p className="issue-label">READING MAP</p>
          <h2>주소 이후의 질문까지 네 개의 노트로 나눴습니다.</h2>
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
              href: "/regions",
              number: "NOTE 02",
              title: "부산·경남 생활권",
              body: "부산 중심·동부·서부와 김해·양산·창원 연결축을 이동 기준으로 나눕니다.",
            },
            {
              href: "/board-guide",
              number: "NOTE 03",
              title: "게시판 읽기",
              body: "후기의 활동 시점, 반복 패턴, 공지와 광고 영역을 구분하는 법을 정리합니다.",
            },
            {
              href: "/editorial",
              number: "NOTE 04",
              title: "편집 기준",
              body: "사용한 공개 출처, 확인하지 못한 범위, 수정 요청 창구를 공개합니다.",
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

      <section className="section region-preview">
        <div className="wrap">
          <div className="section-intro compact-intro">
            <p className="issue-label">REGION FIRST</p>
            <h2>부산 전체보다 귀가 방향을 먼저 정합니다.</h2>
            <p>
              같은 지역 목록도 출발역과 마지막 환승에 따라 실제 후보가 달라집니다.
              지역명은 목적지가 아니라 이동 범위를 줄이는 필터로 사용합니다.
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
          <Link href="/regions" className="text-link">
            생활권 전체 읽기 →
          </Link>
        </div>
      </section>

      <section className="section wrap alternative-panel">
        <div>
          <p className="issue-label">SEPARATE PLATFORM</p>
          <h2>부달이 아닌 부산·경남 대안 정보</h2>
          <p>
            밤의달인은 부산달리기와 별개의 플랫폼입니다. 아래 버튼은 부달 공식
            주소가 아니라 다른 플랫폼의 지역 정보를 여는 링크입니다.
          </p>
        </div>
        <a
          href={SITE.alternativeUrl}
          target="_blank"
          rel="noopener noreferrer sponsored nofollow"
          className="button coral-button"
        >
          밤의달인 지역 정보 보기
        </a>
      </section>

      <section className="section wrap faq-layout">
        <div className="section-intro">
          <p className="issue-label">FAQ</p>
          <h2>확정하기 전에 묻는 질문</h2>
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
    </main>
  );
}
