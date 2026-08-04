import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader, Breadcrumb } from "../components/SiteChrome";
import {
  SITE,
  absoluteUrl,
  breadcrumbSchema,
  jsonLd,
  pageMetadata,
} from "../site";

const title = "부달주소 공개 채널 관찰 기록 | 부산달리기 최신 주소";
const description =
  "부달주소·부산달리기 최신 주소를 Linktree·Telegram 등 공개 채널과 대조하고, 밤의달인(밤달) 바로가기와 확인 보류 기준을 안내합니다.";

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

const FAQ = [
  {
    q: "왜 접속 가능한 주소가 있어도 확정하지 않나요?",
    a: "접속 가능성은 호스트가 살아 있다는 신호일 뿐, 운영 주체·채널 연속성·안전성을 자동으로 증명하지 않습니다. 공개 채널 간 표시가 어긋나면 확정보다 보류가 맞습니다.",
  },
  {
    q: "Telegram에 여러 주소가 있으면 어느 것을 써야 하나요?",
    a: "복수 표기 자체가 관찰 결과입니다. 그중 하나를 임의로 고르기보다 Linktree·사이트 공지와 겹치는 호스트가 있는지를 먼저 보고, 겹치지 않으면 입력을 보류하세요.",
  },
  {
    q: "검색 상위 안내 사이트를 공식으로 볼 수 있나요?",
    a: "검색 순위만으로는 공식성을 판단하지 않습니다. 운영 관계가 불명확한 안내 페이지는 참고 자료일 수 있어도, 이 노트에서는 단일 호스트 확정 근거로 쓰지 않습니다.",
  },
];

export default function AddressLogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/address-log") + "#webpage",
        url: absoluteUrl("/address-log"),
        name: title,
        description,
        dateModified: SITE.reviewedAt,
        inLanguage: "ko-KR",
        isPartOf: { "@id": SITE.url + "/#website" },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/og.png"),
        },
      },
      {
        "@type": "Article",
        headline: title,
        description,
        dateModified: SITE.reviewedAt,
        inLanguage: "ko-KR",
        mainEntityOfPage: absoluteUrl("/address-log"),
        url: absoluteUrl("/address-log"),
        image: absoluteUrl("/og.png"),
        author: { "@id": SITE.url + "/#organization" },
        publisher: { "@id": SITE.url + "/#organization" },
      },
      breadcrumbSchema([
        { name: "홈", path: "/" },
        { name: "주소 관찰", path: "/address-log" },
      ]),
      {
        "@type": "FAQPage",
        "@id": absoluteUrl("/address-log") + "#faq",
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
          <h2>이 기록이 다루는 범위</h2>
          <p>
            이 페이지는 부달주소·부산달리기와 관련해 이용자가 직접 열 수 있는
            공개 채널의 주소 주장을 대조한 관찰 기록입니다. BUDAL FIELDNOTE는
            운영 주체를 대신하지 않으며, 특정 도메인의 소유권·안전성·서비스
            품질을 인증하지 않습니다. 목적은 “지금 당장 쓸 주소 하나”를 찍어
            주는 일이 아니라, 어떤 출처가 무엇을 말하는지, 어디서 어긋나는지,
            그래서 왜 확정을 보류했는지를 남기는 일입니다.
          </p>
          <p>
            부산·경남에서 지역 정보를 찾는 흐름과 주소 확정 흐름은 겹칠 수
            있지만 같지 않습니다. 주소가 불안정한 날에도 출발역·귀가 방향·게시판
            읽기 기준은 따로 적용할 수 있습니다. 반대로 주소가 하나로 수렴해도
            생활권과 게시판 맥락 없이 후보를 고르면 이동 부담이 커질 수
            있습니다. 이 노트는 그 두 축을 섞지 않도록 주소 관찰만 깊게
            정리합니다.
          </p>
        </section>

        <section className="article-section">
          <h2>확인한 공개 출처</h2>
          <p>
            아래 출처는 {SITE.reviewedAt} 전후에 공개로 접근 가능했던
            채널입니다. 각 항목의 “관찰”은 그 채널이 스스로 보여 준 표기를
            요약한 것이고, “상태”는 이 노트의 편집 판정입니다. 원문 링크는
            이용자가 직접 열어 확인할 수 있도록 남기되, 링크 존재 자체가 공식
            승인을 뜻하지는 않습니다.
          </p>
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

        <section className="article-section">
          <h2>출처별 관찰을 이렇게 읽습니다</h2>
          <div className="two-column">
            <div>
              <h3>Linktree형 링크 모음</h3>
              <p>
                Linktree는 여러 목적지를 한 화면에 모아 두는 형태라, “바로가기”
                문구와 실제 호스트가 항상 1:1로 대응하지 않을 수 있습니다.
                버튼 제목에 부산달리기·부달이 보여도 연결 목적지가 여러 개이거나
                외부 안내로 이어질 수 있으므로, 클릭 전 표시 URL과 클릭 후
                주소창을 모두 기록하는 편이 좋습니다. 운영 관계가 추가로
                확인되지 않은 상태에서는 채널 존재만으로 공식 호스트를 단정하지
                않습니다.
              </p>
              <h3>Telegram 공개 채널</h3>
              <p>
                Telegram 공개 보기는 공지성 메시지를 빠르게 전달하지만, 같은
                채널 안에서도 한글 주소·영문 주소·숫자형 주소가 함께 나열될 수
                있습니다. 복수 표기는 “그중 최신이 공식”이라는 뜻이 아니라,
                아직 이용자 쪽에서 추가 대조가 필요하다는 신호로 읽는 것이
                안전합니다. 메시지가 스크롤되며 이전 공지가 묻히므로, 확인
                시각과 메시지 요지를 따로 남겨 두는 것이 중요합니다.
              </p>
            </div>
            <div>
              <h3>검색 결과의 주소 안내 페이지</h3>
              <p>
                검색 상위에 뜨는 “최신주소 안내” 사이트는 편의상 많이 클릭되지만,
                독립 운영 고지·출처 공개·채널과의 일치 여부가 불명확한 경우가
                있습니다. 이 노트에서는 그런 페이지를 공식성 근거로 채택하지
                않습니다. 참고용으로 열더라도, Linktree·Telegram·서비스 내부
                공지와 같은 호스트를 말하는지 교차 확인하기 전까지는 로그인이나
                결제로 넘어가지 않는 편이 낫습니다.
              </p>
              <h3>커뮤니티에 붙은 주소 댓글</h3>
              <p>
                게시판 댓글·서명·프로필 링크에 주소가 반복되면 활발해 보일 수
                있습니다. 그러나 짧은 기간에 같은 문장과 링크가 복제되면 최근성
                신호로 보기 어렵습니다. 주소 관찰과 게시판 읽기는 연결되지만,
                댓글 한 줄로 호스트를 확정하지는 않습니다. 게시판 쪽 기준은{" "}
                <Link href="/board-guide">게시판 읽기</Link>에서 따로
                다룹니다.
              </p>
            </div>
          </div>
        </section>

        <section className="article-section two-column">
          <div>
            <h2>확정하지 않은 이유</h2>
            <p>
              한 채널이 여러 주소를 동시에 표시하거나, 서로 다른 안내 사이트가
              모두 “공식”을 주장하고 있습니다. 이 상황에서 검색 순위가 높다는
              이유로 하나를 선택하면 출처 확인이 아니라 추측이 됩니다. 또한
              숫자형 도메인이 순서대로 바뀌는 패턴을 보고 다음 번호를 직접
              입력하는 방식은, 피싱·유사 도메인에 노출될 위험을 키웁니다.
            </p>
            <p>
              따라서 현재 판정은 “정보가 없다”가 아니라 “공개 출처가 하나의
              호스트로 수렴하지 않아 확정할 수 없다”입니다. 상태가 “
              {SITE.status}”로 유지되는 동안에는, 이용자가 기존에 쓰던 채널의
              최신 공지를 우선하고, 서로 다른 공개 출처가 같은 호스트를 가리킬
              때까지 민감한 입력을 보류하는 쪽을 권합니다.
            </p>
          </div>
          <div className="rule-list">
            <p>
              <strong>01</strong> 숫자 +1 주소를 다음 도메인으로 예측하지 않기
            </p>
            <p>
              <strong>02</strong> 캡처 이미지보다 직접 열 수 있는 공지 우선
            </p>
            <p>
              <strong>03</strong> 주소, 채널, 확인일을 한 묶음으로 기록
            </p>
            <p>
              <strong>04</strong> 보안 경고가 보이면 접속과 입력 중단
            </p>
            <p>
              <strong>05</strong> 검색 순위만으로 공식성을 판단하지 않기
            </p>
            <p>
              <strong>06</strong> 한 채널의 복수 주소는 상충 신호로 기록
            </p>
          </div>
        </section>

        <section className="article-section">
          <h2>직접 확인할 때의 순서</h2>
          <p>
            아래 순서는 편집실에서 쓰는 최소 절차입니다. 부산·경남에서 이동
            계획을 세우는 일과 병행할 때는, 주소 대조가 끝나기 전에 생활권만
            먼저 고정해 두어도 됩니다. 주소가 바뀌더라도 출발역과 귀가 수단은
            그대로 유효한 경우가 많기 때문입니다.
          </p>
          <ol className="steps">
            {[
              "기존에 이용하던 채널의 주소와 최근 공지를 먼저 확인합니다. 새로 검색된 “최신주소” 페이지보다 기존 채널의 변경 이력이 우선인 경우가 많습니다.",
              "링크를 열기 전 표시 목적지와 열린 뒤 주소창 호스트를 비교합니다. 짧은 주소·중계 도메인·최종 호스트가 다를 수 있으므로 단계별로 적습니다.",
              "Linktree·Telegram·사이트 안 공지가 같은 호스트를 가리키는지 봅니다. 서로 다르면 그 차이를 해소하기 전에 하나를 고르지 않습니다.",
              "일치하지 않으면 로그인, 결제, 앱 설치를 보류하고 다시 확인합니다. 보안 경고나 과도한 권한 요청이 있으면 즉시 중단합니다.",
              "확인이 끝나면 호스트·채널명·확인일을 한 줄로 남깁니다. 나중에 채널 문구가 바뀌었을 때 무엇이 달라졌는지 비교할 기준이 됩니다.",
            ].map((step, index) => (
              <li key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="article-section">
          <h2>부산·경남 이용자가 특히 헷갈리기 쉬운 지점</h2>
          <p>
            부달주소 검색은 전국 단위 키워드처럼 보이지만, 실제 이용 맥락은
            부산 시내와 경남 연접 도시의 이동 패턴에 묶여 있는 경우가 많습니다.
            서면·전포처럼 환승이 쉬운 중심권과, 해운대·기장처럼 막차 이후
            귀가 부담이 커지는 동부권, 사상·김해·창원처럼 시외 연결이 중요한
            서부·경남권은 “같은 주소를 열더라도” 이후 선택이 달라집니다. 그래서
            주소 관찰 노트는 생활권 노트와 짝으로 읽히도록 구성했습니다.
          </p>
          <ul className="boxed-list">
            <li>
              중심권(서면·전포·연산): 접근성은 높지만 심야 혼잡과 출구·골목 도보
              거리를 따로 계산해야 합니다.
            </li>
            <li>
              동부 해안권(해운대·센텀·수영·기장): 행사·관광 수요에 따라 이동
              시간이 크게 흔들립니다.
            </li>
            <li>
              서부·경남 연결(사상·강서·김해·창원): 행정구역보다 귀가 방향과
              시외 막차가 중요합니다.
            </li>
            <li>
              북부 연결(동래·금정·양산): 양산 안에서도 물금·증산과 웅상은 생활권이
              다릅니다.
            </li>
          </ul>
          <p>
            주소가 “재확인 필요”인 날에도 위 생활권 필터는 독립적으로 쓸 수
            있습니다. 자세한 이동 축 설명은{" "}
            <Link href="/regions">부산·경남 생활권 가이드</Link>를 참고하세요.
          </p>
        </section>

        <aside className="pull-quote">
          <p>
            빠른 확정은 편리해 보이지만, 상충하는 공개 출처를 덮는 순간 그
            편의는 이용자에게 전가되는 위험이 됩니다. 보류도 편집의 결론입니다.
          </p>
        </aside>

        <section className="article-section">
          <h2>기록이 바뀌는 조건</h2>
          <p>
            이 노트가 단일 호스트를 “공개 채널에서 일치 확인”으로 올리려면, 서로
            독립적인 공개 채널 두 곳 이상이 같은 호스트를 표시하고, 가능하면
            서비스 내부 공지와도 맞아야 합니다. 숫자형 다음 주소만 예고되거나,
            운영 관계를 알 수 없는 안내 사이트만 근거인 경우에는 계속 보류합니다.
            정정·추가 공개 자료가 있으면{" "}
            <a href={"mailto:" + SITE.email}>{SITE.email}</a>로 제보할 수
            있습니다. 편집 원칙의 전체 목록은{" "}
            <Link href="/editorial">편집 기준</Link>에 있습니다.
          </p>
        </section>

        <section className="article-section">
          <h2>자주 묻는 확인</h2>
          <div className="faq-list">
            {FAQ.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="article-section article-next">
          <h2>밤의달인(밤달) 바로가기</h2>
          <p>
            부산·경남 정보는 밤의달인(밤달, <strong>bamdalin.com</strong>)에서
            확인할 수 있습니다.
          </p>
          <p>
            <a
              href={SITE.alternativeUrl}
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
              className="button coral-button"
            >
              바로가기
            </a>
          </p>
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
