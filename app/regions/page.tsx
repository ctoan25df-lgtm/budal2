import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader, Breadcrumb } from "../components/SiteChrome";
import { SITE, jsonLd, pageMetadata } from "../site";

const title = "부달 부산·경남 생활권 탐색 지도";
const description =
  "부산 중심·동부·서부·북부와 김해·양산·창원 연결권을 출발지, 환승, 야간 귀가 기준으로 나누는 지역 탐색 가이드입니다.";

export const metadata: Metadata = pageMetadata(title, description, "/regions");

const regions = [
  {
    code: "C",
    name: "부산 중심권",
    places: "서면 · 전포 · 연산",
    transport: "1·2·3호선 환승축",
    note: "여러 권역에서 접근하기 쉬운 대신 심야 혼잡이 큽니다. 서면역 출구와 전포 골목처럼 같은 중심권 안의 실제 도보 거리를 따로 계산하세요.",
  },
  {
    code: "E",
    name: "동부 해안권",
    places: "해운대 · 센텀 · 수영 · 기장",
    transport: "2호선 · 동해선",
    note: "관광·행사 수요에 따라 이동 시간이 크게 달라집니다. 해변권과 센텀 업무권, 기장 동부산권을 하나의 가까운 범위로 묶지 않는 편이 좋습니다.",
  },
  {
    code: "W",
    name: "서부 연결권",
    places: "사상 · 강서 · 김해 · 진해",
    transport: "2호선 · 경전철 · 버스",
    note: "부산 시내보다 김해·창원 방향 연결이 유리할 수 있습니다. 부산신항·용원은 행정구역과 실제 생활권이 다르게 느껴질 수 있어 귀가 방향을 먼저 봅니다.",
  },
  {
    code: "N",
    name: "북부 연결권",
    places: "동래 · 금정 · 양산",
    transport: "1호선 · 부산종합버스터미널",
    note: "부산 북부와 양산 물금·증산권은 연결성이 높지만 웅상권은 울산 남부와 가깝습니다. 양산이라는 이름만으로 한 생활권으로 묶지 마세요.",
  },
  {
    code: "G",
    name: "경남 도시간",
    places: "창원 · 마산 · 진해 · 거제",
    transport: "시외버스 · 철도 · 차량",
    note: "도시 간 이동은 막차와 차량 소요 시간이 핵심입니다. 마창진은 한 행정권이지만 상남동·합성동·석동·용원의 거리가 커서 각각의 거점을 따로 확인합니다.",
  },
];

export default function RegionsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    dateModified: SITE.reviewedAt,
    inLanguage: "ko-KR",
    mainEntityOfPage: new URL("/regions", SITE.url).toString(),
    about: { "@type": "Place", name: "부산·경상남도 생활권" },
  };

  return (
    <main id="main-content" className="article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <div className="wrap article-wrap">
        <Breadcrumb current="생활권" />
        <ArticleHeader
          issue="NOTE 02 · REGION MAP"
          title={title}
          lead="지역명을 많이 나열하는 대신 실제 이동과 귀가를 결정하는 다섯 연결축으로 나눕니다."
        />

        <section className="article-section">
          <h2>지역명을 필터로 쓰는 이유</h2>
          <p>
            부달·부산달리기 관련 목록에서 “부산”, “경남”, “해운대”, “창원”처럼
            지역명이 붙는 경우는 많지만, 그 이름이 곧 지금 출발지에서의 현실적인
            이동 가능 범위를 뜻하지는 않습니다. 같은 부산이라도 서면에서
            시작하는 밤과 해운대에서 시작하는 밤은 환승 횟수, 막차 시각, 도보
            구간, 택시 수요가 다릅니다. 이 노트는 행정구역 백과사전을 만들려는
            것이 아니라, 후보를 줄일 때 먼저 던져야 할 이동 질문을 생활권
            단위로 정리합니다.
          </p>
          <p>
            주소 관찰이 “재확인 필요”인 날에도 생활권 필터는 독립적으로
            유효합니다. 반대로 주소가 하나로 보여도 귀가 방향을 무시하면 실제
            소요 시간이 크게 어긋날 수 있습니다. 지역 탐색과 주소 확인, 게시판
            읽기는 순서를 나누는 편이 안전합니다.
          </p>
        </section>

        <section className="article-section">
          <div className="region-ledger">
            {regions.map((region) => (
              <article key={region.code}>
                <span>{region.code}</span>
                <div>
                  <p className="region-transport">{region.transport}</p>
                  <h2>{region.name}</h2>
                  <strong>{region.places}</strong>
                  <p>{region.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="article-section">
          <h2>권역별 이동을 조금 더 구체적으로</h2>
          <div className="two-column">
            <div>
              <h3>부산 중심권 · 서면·전포·연산</h3>
              <p>
                1·2·3호선이 만나는 중심축은 부산 어디에서도 접근하기 쉽습니다.
                다만 “서면”이라는 한 단어 안에 역세권 대로와 전포 골목, 연산
                환승 동선이 섞여 있습니다. 지도상 가까워 보여도 심야 보행
                환경·횡단·대기 장소에 따라 체감 거리는 달라집니다. 여러 권역에서
                모이기 쉬운 만큼 주말·행사 다음날 새벽에는 택시 수요도 같이
                몰릴 수 있어, 귀가 수단을 역 기준으로만 생각하지 말고 마지막
                도보 구간까지 포함해 계산하세요.
              </p>
              <h3>동부 해안권 · 해운대·센텀·수영·기장</h3>
              <p>
                2호선과 동해선이 겹치는 동부는 해변·관광·업무·거주 수요가 한
                줄로 붙어 있는 것처럼 보이지만, 실제로는 층이 나뉩니다. 해운대
                해변권과 센텀 일대, 수영·광안 쪽, 기장·동부산 쪽을 하나의
                “가까운 동부”로 묶으면 이동 시간이 과소평가되기 쉽습니다.
                불꽃축제·대형 공연·성수기 주말에는 평소보다 훨씬 일찍 막히므로,
                목록의 지역명보다 그날의 행사 캘린더를 먼저 보는 편이
                실용적입니다.
              </p>
            </div>
            <div>
              <h3>서부 연결권 · 사상·강서·김해·진해</h3>
              <p>
                사상·하단·강서에서 김해·창원·진해로 이어지는 축은 부산 시내
                중심부보다 시외 연결이 중요합니다. 경전철·버스·차량 조합에 따라
                “부산으로 들어왔다가 다시 서쪽으로 나가는” 동선이 비효율적일 수
                있습니다. 신항·용원처럼 행정표기와 체감 생활권이 어긋나는
                지점도 있어, 후보지 이름만 보고 부산 시내로 단순 분류하기보다
                귀가 방향(김해·창원·진해·시내)을 먼저 고정하세요.
              </p>
              <h3>북부 연결권 · 동래·금정·양산</h3>
              <p>
                1호선과 부산종합버스터미널 축은 부산 북부와 양산을 잘 잇습니다.
                다만 양산 내부도 물금·증산권과 웅상권이 서로 다른 방향으로
                열려 있습니다. 웅상은 울산 남부와의 연결이 더 자연스러운 경우가
                있어, “양산”이라는 라벨만으로 동래·노포 기준 이동 시간을 적용하면
                오차가 납니다. 금정·장전·구서 일대는 대학·주거 리듬에 따라 심야
                유동이 달라지므로 평일과 주말을 구분하는 것이 좋습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="article-section">
          <h2>경남 도시간 · 창원·마산·진해·거제</h2>
          <p>
            마창진은 행정적으로 가깝게 묶이지만, 상남·용호 일대와 마산 합성·부림
            일대, 진해 석동·용원 일대는 차량 소요와 버스 배차가 꽤 다릅니다.
            거제처럼 교량·우회 도로에 영향을 받는 권역은 “거리”보다 “통과 시간”
            으로 계산해야 합니다. 도시 간 이동에서는 도시철도 환승보다 시외버스
            막차, 기차 막차, 대리·차량 귀가 가능 여부가 후보를 가르는 핵심
            조건이 됩니다.
          </p>
          <p>
            부산에서 경남으로, 또는 경남에서 부산으로 넘어가는 날에는 목적지의
            행정명보다 “마지막에 남는 교통 수단”을 먼저 정하세요. 예를 들어
            창원 귀가가 확정이면 부산 중심권에서 오래 머무는 일정보다, 환승
            부담이 적은 서부 연결 후보를 먼저 보는 식이 현실적입니다. 반대로
            부산 시내 숙소·귀가라면 경남 내 이동이 긴 후보는 후순위로 내려도
            됩니다.
          </p>
        </section>

        <section className="article-section two-column">
          <div>
            <h2>지역 필터를 고르는 질문</h2>
            <p>
              “부산인가 경남인가”보다 아래 질문에 먼저 답하면 행정경계를 넘더라도
              실제로 가까운 후보를 놓치지 않습니다. 질문은 순서대로 적용하는
              것이 좋고, 하나라도 답이 비면 후보를 더 줄이기 전에 이동 계획부터
              보완하세요.
            </p>
          </div>
          <ul className="boxed-list">
            <li>출발역에서 편도 몇 분까지 가능한가</li>
            <li>마지막 환승과 귀가 수단은 무엇인가</li>
            <li>행사·해변 혼잡을 반영했는가</li>
            <li>도보 구간과 큰 도로의 만남 지점을 정했는가</li>
            <li>막차 이후에도 돌아갈 수단이 있는가</li>
            <li>같은 지역명 안의 세부 거점을 구분했는가</li>
          </ul>
        </section>

        <section className="article-section">
          <h2>야간·심야에 특히 달라지는 점</h2>
          <ol className="steps">
            {[
              "도시철도 막차 시각을 출발지가 아니라 마지막 환승역 기준으로 다시 계산합니다. 서면에서 끊기는 일정과 노포·장산·사상에서 끊기는 일정은 귀가 전략이 다릅니다.",
              "심야버스·택시·차량 중 실제로 쓸 수단을 하나만 남겨 둡니다. “어떻게든 돌아가겠지”는 계획이 아닙니다.",
              "해변·축제·대형 행사일은 평소 생활권 감각을 잠시 내려놓고, 우회 도로와 배차 공백을 먼저 확인합니다.",
              "경남 도시간 이동은 막차 이후 선택지가 급격히 줄어듭니다. 창원·김해·거제 귀가가 있으면 일정 상한을 더 이르게 잡는 편이 안전합니다.",
              "만남 지점은 골목 안쪽보다 조명·유동이 있는 큰길·역 출구처럼 설명하기 쉬운 지점이 실수를 줄입니다.",
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
            지역명은 목적지가 아니라 필터입니다. 필터가 넓으면 게시판도 주소
            정보도 모두 과하게 많아 보입니다.
          </p>
        </aside>

        <section className="article-section">
          <h2>생활권 다음에 할 일</h2>
          <p>
            생활권을 하나로 고정했다면, 커뮤니티 글은 그 범위 안에서{" "}
            <Link href="/board-guide">게시판 읽기</Link> 기준으로 공지·광고·후기를
            구분하세요. 주소 자체가 불확실하면{" "}
            <Link href="/address-log">주소 관찰 기록</Link>의 보류 기준을 먼저
            확인하는 편이 안전합니다. 이 사이트의 편집 범위와 정정 창구는{" "}
            <Link href="/editorial">편집 기준</Link>에 정리되어 있습니다.
          </p>
        </section>

        <section className="article-section article-next">
          <h2>밤의달인 바로가기</h2>
          <p>
            부산·경남 정보는 밤의달인(<strong>bamdalin.com</strong>)에서 확인할
            수 있습니다.
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
          <h2>목록을 읽을 때는 지역 다음에 게시판 맥락</h2>
          <p>
            생활권을 하나 고른 뒤 <Link href="/board-guide">게시판 읽기</Link>에서
            공지·광고·후기 영역을 구분하세요. 주소가 확실하지 않다면{" "}
            <Link href="/address-log">주소 관찰 기록</Link>의 보류 기준부터
            확인하는 편이 안전합니다.
          </p>
        </section>
      </div>
    </main>
  );
}
