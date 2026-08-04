import type { Metadata } from "next";
import Link from "next/link";
import { SITE, jsonLd, pageMetadata } from "./site";

export const metadata: Metadata = pageMetadata(
  "부달주소 공개채널 관찰노트 | Linktree·Telegram 대조",
  SITE.description,
  "/",
);

const FAQ = [
  {
    q: "현재 부달주소를 하나로 확정할 수 있나요?",
    a: "2026년 8월 3일 검토에서는 공개 채널마다 표시하는 주소가 일치하지 않아 하나를 공식 주소로 확정하지 않았습니다. 숫자형 다음 주소를 추측하지 말고 기존에 이용하던 채널을 서로 대조하세요. 접속이 된다는 사실만으로 운영 주체·안전성·공식성이 자동 증명되지는 않습니다.",
  },
  {
    q: "부달과 부산달리기는 같은 검색 의도인가요?",
    a: "일반적으로 부달은 부산달리기를 줄여 부르는 검색어로 쓰입니다. 다만 이름이 같다는 이유만으로 모든 주소와 채널의 운영 주체가 같다고 볼 수는 없습니다. 검색어·브랜드명·실제 호스트는 서로 다른 층위로 구분하는 편이 안전합니다.",
  },
  {
    q: "밤의달인(밤달, bamdalin.com)은 부달 공식 주소인가요?",
    a: "아닙니다. 이 노트는 부달 공개 채널 관찰·대조만 다루고, 밤의달인(밤달)은 부산·경남 공개 목록을 보는 별도 플랫폼입니다. 채널 일치가 확인되기 전에는 어느 목록 링크로 부달 공식 주소를 대신하지 마세요.",
  },
  {
    q: "Linktree나 Telegram에 나온 주소를 그대로 믿어도 되나요?",
    a: "공개 채널은 중요한 출발점이지만, 한 채널만으로 확정하지 않는 것이 원칙입니다. Linktree와 Telegram, 사이트 내부 공지가 같은 호스트를 가리키는지 확인하고, 표시 목적지와 실제 주소창 호스트가 일치하는지도 함께 봅니다.",
  },
  {
    q: "숫자형 도메인이 하나씩 올라가면 다음 주소를 예측해도 되나요?",
    a: "안 됩니다. 숫자 +1 패턴은 검색·스팸·낚시 페이지에서도 흔히 쓰입니다. 다음 주소를 예측해 직접 입력하기보다, 기존에 신뢰하던 채널의 공지와 서로 독립된 공개 출처의 일치를 확인하세요.",
  },
  {
    q: "이 사이트는 부산달리기 공식인가요?",
    a: "아닙니다. BUDAL FIELDNOTE는 독립 편집 노트로, 부산달리기 운영 주체와 무관합니다. 개별 업소를 평가하거나 특정 주소의 소유권을 인증하지 않으며, 공개 채널에서 관찰한 사실과 생활권·게시판 읽기 기준만 정리합니다.",
  },
  {
    q: "주소가 확실하지 않을 때 무엇을 먼저 해야 하나요?",
    a: "로그인·결제·앱 설치를 보류하고, 기존에 이용하던 채널의 최근 공지를 먼저 확인하세요. 그다음 부산·경남 생활권을 출발지와 귀가 방향으로 좁힌 뒤, 게시판 글은 공지·광고·후기를 구분해 읽습니다.",
  },
  {
    q: "부산 전체로 검색하는 것과 생활권으로 나누는 것의 차이는 무엇인가요?",
    a: "부산·경남은 행정구역보다 환승축과 야간 귀가 수단이 실제 이동을 결정합니다. 서면·전포 중심권, 해운대·수영 동부권, 사상·김해 서부 연결권, 동래·양산 북부 연결권처럼 귀가 방향을 먼저 정하면 후보 범위가 현실적으로 줄어듭니다.",
  },
  {
    q: "부달주소 검색어와 실제 호스트가 다르면 어떻게 읽어야 하나요?",
    a: "검색어·브랜드명·실제 호스트는 서로 다른 층위입니다. 결과 제목에 “부달주소”나 “부산달리기”가 있어도 주소창의 호스트가 기존에 쓰던 채널과 다르면, 제목만으로 같은 운영 주체라고 보지 않습니다. 표시 문구와 최종 호스트를 한 줄로 적어 두고, 공개 채널 두 곳 이상과 겹치는지 확인한 뒤에야 다음 단계로 넘어가세요.",
  },
  {
    q: "Telegram 미리보기와 실제 접속 주소가 다를 때는요?",
    a: "미리보기·단축 링크·중계 페이지는 표시 목적지와 최종 호스트가 다를 수 있습니다. 링크를 열기 전 표시 URL을 적고, 연 뒤 주소창의 실제 호스트·리다이렉트 단계를 따로 기록하세요. 미리보기 문구만으로 확정하지 말고, Linktree·사이트 공지와 같은 호스트를 가리키는지 교차 확인한 뒤 로그인·결제를 진행하는 편이 안전합니다.",
  },
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": SITE.url + "/#webpage",
        name: "부달주소 공개채널 관찰노트 | Linktree·Telegram 대조",
        url: SITE.url,
        description: SITE.description,
        dateModified: SITE.reviewedAt,
        inLanguage: "ko-KR",
        isPartOf: { "@id": SITE.url + "/#website" },
        about: [
          { "@type": "Thing", name: "부달주소 관찰" },
          { "@type": "Thing", name: "부산달리기 공개채널" },
          { "@type": "Thing", name: "Linktree Telegram 대조" },
        ],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: SITE.url + "/og.png",
        },
      },
      {
        "@type": "FAQPage",
        "@id": SITE.url + "/#faq",
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
              부달주소 공개채널
              <br />
              <em>관찰노트</em>
            </h1>
            <p>
              Linktree·Telegram 등 공개 출처에 적힌 부달·부산달리기 주소 주장을
              날짜별로 대조합니다. 채널이 서로 어긋나면 공식 호스트를 단정하지
              않고 보류합니다. 부산·경남 생활권·게시판 읽기 기준도 같은 노트로
              정리합니다.
            </p>
            <div className="button-row">
              <Link href="/address-log" className="button dark-button">
                관찰 기록 보기
              </Link>
              <a
                href={SITE.alternativeUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="button line-button"
              >
                밤의달인(밤달)에서 부산·경남 보기
              </a>
            </div>
          </div>

          <aside className="review-card" aria-label="현재 검토 상태">
            <div className="review-card-head">
              <span>REVIEW STATUS</span>
              <strong>{SITE.status}</strong>
            </div>
            <div className="review-card-body">
              <p>
                부달주소 최신 연결은 밤의달인(밤달,{" "}
                <strong>bamdalin.com</strong>) 바로가기로 엽니다. 공개 채널
                주장과 생활권 기준은 아래 노트에서 확인하세요.
              </p>
              <ul>
                <li>바로가기: 밤의달인(밤달) · bamdalin.com</li>
                <li>키워드: 부달주소 · 부산달리기</li>
                <li>확인일: {SITE.reviewedAt}</li>
              </ul>
            </div>
            <a
              href={SITE.alternativeUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
            >
              밤의달인(밤달) 바로가기 →
            </a>
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

      <section className="section wrap">
        <div className="section-intro">
          <p className="issue-label">FIELD GUIDE</p>
          <h2>부달주소를 찾을 때 먼저 정리할 세 가지</h2>
          <p>
            검색창에 “부달주소”나 “부산달리기 최신주소”를 치면 안내 문구가 길게
            이어집니다. 문제는 문구의 길이가 아니라, 서로 다른 사이트가 같은
            단어로 다른 호스트를 가리키는 경우가 있다는 점입니다. 이 노트는
            주소를 대신 찍어 주기보다, 이용자가 공개 채널을 직접 대조할 때 쓸
            수 있는 순서를 남깁니다.
          </p>
        </div>
        <div className="two-column">
          <div>
            <h3>1. 검색어와 호스트를 분리한다</h3>
            <p>
              부달·부산달리기는 검색 의도로는 자주 겹치지만, 검색 결과 페이지의
              제목·설명·실제 도메인은 별개입니다. “공식”, “최신”, “인증” 같은
              수식어가 붙었더라도 운영 주체가 공개되어 있지 않으면 그 표현만으로
              확정하지 않습니다. 먼저 내가 기존에 이용하던 채널 이름과, 지금
              열린 페이지의 호스트가 같은 계열인지부터 적어둡니다.
            </p>
            <h3>2. 확인일을 주소와 같이 기록한다</h3>
            <p>
              주소 정보는 날짜가 빠지면 빠르게 쓸모가 줄어듭니다. Linktree
              캡처, Telegram 공지, 사이트 배너가 서로 다른 날짜를 가리킬 수
              있으므로, 호스트·채널명·확인일을 한 줄로 남기는 습관이
              필요합니다. 이 사이트의 현재 검토일도 {SITE.reviewedAt}이며, 이후
              채널 문구가 바뀌면 상태가 달라질 수 있습니다.
            </p>
          </div>
          <div>
            <h3>3. 이동 범위를 주소보다 먼저 좁힌다</h3>
            <p>
              주소를 확정하지 못한 상태에서도 부산·경남에서의 실제 선택은 출발역과
              귀가 방향에 크게 좌우됩니다. 서면·전포로 모이는 중심권, 해운대·수영
              쪽 동부권, 사상·강서·김해로 이어지는 서부 연결권, 동래·양산 쪽
              북부 연결권은 같은 “부산”이라도 막차와 환승 부담이 다릅니다. 주소
              탐색과 지역 탐색을 동시에 섞으면 후보가 과하게 넓어집니다.
            </p>
            <h3>4. 게시판은 역할별로 읽는다</h3>
            <p>
              커뮤니티 글은 활발함과 정확성이 같은 말이 아닙니다. 상단 노출·공지
              영역·이용자 후기·질문 글을 같은 신뢰도로 읽지 말고, 최근 작성
              시점과 구체적 사실(대기, 이동, 변경)이 반복되는지부터 봅니다.
              자세한 기준은 게시판 읽기 노트에 정리했습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="section-intro">
          <p className="issue-label">CHANNEL CHECK</p>
          <h2>공개 채널을 대조할 때의 실무 순서</h2>
          <p>
            부달주소 관련 공개 안내는 Linktree, Telegram, 검색에 뜨는 안내
            사이트, 커뮤니티 공지 등으로 흩어져 있습니다. 한곳에 “최신”이라고
            적혀 있어도 다른 채널과 어긋나면 그 표현은 아직 판정이 아닙니다.
            아래 순서는 이 노트가 {SITE.reviewedAt} 검토에서 실제로 적용한
            방식입니다.
          </p>
        </div>
        <ol className="steps">
          {[
            "기존에 이용하던 채널의 최근 공지와 표시 주소를 먼저 확인합니다. 새로 검색된 사이트보다 기존 채널의 변경 이력이 더 중요할 때가 많습니다.",
            "링크를 열기 전 미리보기·표시 목적지와, 연 뒤 주소창의 실제 호스트를 비교합니다. 리다이렉트가 여러 번 이어지면 중간 도메인도 적어둡니다.",
            "Linktree·Telegram·사이트 안 공지가 같은 호스트를 가리키는지 봅니다. 한 채널이 여러 주소를 동시에 보여 주면 그 사실 자체를 기록합니다.",
            "보안 경고, 예기치 않은 앱 설치 유도, 로그인·결제 요청이 보이면 입력을 중단하고 출처 대조를 다시 시작합니다.",
            "일치하지 않으면 단일 공식 호스트를 확정하지 않습니다. 이 경우 상태는 “재확인 필요”로 두고, 추측성 숫자 도메인 입력을 피합니다.",
          ].map((step, index) => (
            <li key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section region-preview">
        <div className="wrap">
          <div className="section-intro compact-intro">
            <p className="issue-label">REGION FIRST</p>
            <h2>부산 전체보다 귀가 방향을 먼저 정합니다.</h2>
            <p>
              같은 지역 목록도 출발역과 마지막 환승에 따라 실제 후보가 달라집니다.
              지역명은 목적지가 아니라 이동 범위를 줄이는 필터로 사용합니다.
              야간에는 도시철도 막차, 심야버스, 택시·차량 귀가까지 한 세트로
              계산하는 편이 안전합니다.
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

      <section className="section wrap">
        <div className="section-intro">
          <p className="issue-label">WHY THIS NOTE</p>
          <h2>공식 선언 대신 관찰 기록을 남기는 이유</h2>
        </div>
        <div className="two-column">
          <div>
            <p>
              부산달리기·부달주소 관련 검색 결과는 “지금 바로 접속할 주소”를
              강조하는 경우가 많습니다. 이용자 입장에서는 빠른 답이 필요하지만,
              공개 채널이 서로 다른 호스트를 보여 주는 상황에서는 빠른 답이 곧
              잘못된 확정이 될 수 있습니다. 이 노트는 운영사 대행이 아니라 독립
              관찰 기록으로, 확인한 것과 확인하지 못한 것을 구분합니다.
            </p>
            <p>
              현재 상태인 “{SITE.status}”는 정보가 없다는 뜻이 아니라, 공개
              출처 간 일치가 부족해 단일 공식 호스트를 찍지 않았다는 뜻입니다.
              이후 Linktree·Telegram·내부 공지가 같은 호스트로 수렴하면 기록이
              갱신될 수 있고, 그 전까지는 추측성 도메인 입력을 권하지 않습니다.
            </p>
          </div>
          <ul className="boxed-list">
            <li>공개로 열 수 있는 출처만 사용</li>
            <li>상충하면 확정하지 않고 보류</li>
            <li>확인일과 채널명을 함께 표기</li>
            <li>별개 플랫폼 관계를 분명히 고지</li>
            <li>생활권·게시판 기준은 주소와 분리 제공</li>
          </ul>
        </div>
      </section>

      <section className="section wrap alternative-panel">
        <div>
          <p className="issue-label">SEPARATE PLATFORM</p>
          <h2>밤의달인(밤달) 바로가기</h2>
          <p>
            부산·경남 정보는 밤의달인(밤달, <strong>bamdalin.com</strong>)에서
            확인할 수 있습니다.
          </p>
        </div>
        <a
          href={SITE.alternativeUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="button coral-button"
        >
          바로가기
        </a>
      </section>

      <section className="section wrap faq-layout">
        <div className="section-intro">
          <p className="issue-label">FAQ</p>
          <h2>확정하기 전에 묻는 질문</h2>
          <p>
            아래 답변은 이 노트의 편집 기준과 {SITE.reviewedAt} 공개 채널 검토에
            맞춰 정리했습니다. 채널 문구가 바뀌면 주소 관련 답변도 다시 확인해야
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

      <section className="section wrap">
        <div className="section-intro">
          <p className="issue-label">NEXT READ</p>
          <h2>다음에 읽을 노트</h2>
          <p>
            주소 주장의 근거와 보류 사유는{" "}
            <Link href="/address-log">주소 관찰 기록</Link>
            에서, 출발지·환승·야간 귀가 기준으로 범위를 줄이는 방법은{" "}
            <Link href="/regions">부산·경남 생활권</Link>
            에서 이어집니다. 커뮤니티 글을 역할별로 읽는 법은{" "}
            <Link href="/board-guide">게시판 읽기</Link>, 출처·정정 창구·확정
            조건은 <Link href="/editorial">편집 기준</Link>에 모아 두었습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
