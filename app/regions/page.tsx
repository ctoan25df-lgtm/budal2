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

        <section className="article-section two-column">
          <div>
            <h2>지역 필터를 고르는 질문</h2>
            <p>
              “부산인가 경남인가”보다 아래 질문에 먼저 답하면 행정경계를 넘더라도
              실제로 가까운 후보를 놓치지 않습니다.
            </p>
          </div>
          <ul className="boxed-list">
            <li>출발역에서 편도 몇 분까지 가능한가</li>
            <li>마지막 환승과 귀가 수단은 무엇인가</li>
            <li>행사·해변 혼잡을 반영했는가</li>
            <li>도보 구간과 큰 도로의 만남 지점을 정했는가</li>
          </ul>
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
