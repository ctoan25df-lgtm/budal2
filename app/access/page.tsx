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

const title = "부달주소 접속 안 될 때 | 캐시·DNS·호스트 점검";
const description =
  "부달·부산달리기 접속이 안 될 때 캐시, DNS, 호스트 불일치, 보안 경고를 순서대로 점검하는 관찰 노트. 우회주소 추측 없이 공개 채널부터 대조합니다.";

export const metadata: Metadata = pageMetadata(title, description, "/access");

const steps = [
  {
    name: "기존 공개 채널 공지 확인",
    text: "검색으로 새 주소를 찾기 전에 밤의달인(밤달) 목록과 생활권 허브·Telegram CS 안내를 구분해 확인합니다.",
  },
  {
    name: "표시 URL과 주소창 호스트 비교",
    text: "링크를 열기 전 표시된 목적지와, 연 뒤 주소창의 실제 호스트·리다이렉트 경로를 적어 둡니다.",
  },
  {
    name: "캐시·DNS·네트워크 점검",
    text: "페이지가 열리지 않으면 브라우저 캐시 삭제, 다른 네트워크, DNS 변경 여부를 확인한 뒤 같은 호스트를 다시 시도합니다.",
  },
  {
    name: "보안 경고·앱 설치 유도 시 중단",
    text: "인증서 경고, 강제 앱 설치, 즉시 로그인·결제를 요구하면 입력을 멈추고 채널 대조를 다시 시작합니다.",
  },
];

const FAQ = [
  {
    q: "502·타임아웃이 뜨면 주소가 바뀐 건가요?",
    a: "서버 장애·네트워크 문제일 수도 있어 주소 변경과 동일하지 않습니다. 기존 채널 공지와 호스트 일치를 먼저 보고, 공지 없이 숫자형 다음 주소를 추측해 입력하지 마세요.",
  },
  {
    q: "검색에 나온 우회주소를 바로 써도 되나요?",
    a: "권장하지 않습니다. ‘우회·평생주소’ 문구는 광고·사칭에도 자주 쓰입니다. 공개 채널 두 곳 이상과 호스트가 겹칠 때만 다음 단계로 넘어가세요.",
  },
  {
    q: "모바일만 안 되고 PC는 되면요?",
    a: "모바일 DNS·사설 DNS·절전 모드·캐시 앱이 원인일 수 있습니다. 같은 호스트를 Wi-Fi와 셀룰러에서 각각 시도하고, 표시 호스트가 채널과 같은지부터 확인하세요.",
  },
];

export default function AccessPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        url: absoluteUrl("/access"),
        name: title,
        description,
        dateModified: SITE.reviewedAt,
        inLanguage: "ko-KR",
        isPartOf: { "@id": SITE.url + "/#website" },
      },
      {
        "@type": "HowTo",
        name: title,
        description,
        step: steps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.name,
          text: step.text,
        })),
      },
      breadcrumbSchema([
        { name: "홈", path: "/" },
        { name: "접속", path: "/access" },
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
        <Breadcrumb current="접속" />
        <ArticleHeader
          issue="FIELD NOTE · ACCESS CHECK"
          title={title}
          lead="접속 실패를 ‘새 주소를 찾는 신호’로만 읽지 마세요. 채널 공지·호스트·네트워크를 같은 순서로 점검하면 추측성 도메인 입력을 줄일 수 있습니다."
        />
        <ReviewStatusAside />

        <section className="article-section">
          <h2>이 노트가 다루는 범위</h2>
          <p>
            부달주소·부산달리기 관련 페이지가 열리지 않거나, 중간에 끊기거나,
            다른 호스트로 넘어갈 때 이용자가 스스로 확인할 체크리스트입니다.
            “최신 우회주소”를 대신 찍어 주지 않으며, 운영사 DNS·서버 상태를
            대행 안내하지도 않습니다. 목적은 공개 출처 대조 전에 흔한 기술·사칭
            함정을 걸러 내는 일입니다.
          </p>
        </section>

        <section className="article-section">
          <h2>점검 순서</h2>
          <ol className="steps">
            {steps.map((step, index) => (
              <li key={step.name}>
                <span>{index + 1}</span>
                <p>
                  <strong>{step.name}.</strong> {step.text}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="article-section">
          <h2>호스트가 어긋날 때</h2>
          <p>
            북마크한 주소와 채널에 적힌 주소가 다르면, 둘 중 하나를 임의로
            고르기보다{" "}
            <Link href="/address-log">주소 관찰 기록</Link>의 대조 기준을 다시
            적용하세요. 미리보기·단축 링크만 보고 로그인하면 중간 도메인을
            놓치기 쉽습니다. 사칭 징후가 보이면{" "}
            <Link href="/safety">안전·사칭 노트</Link>로 이어집니다.
          </p>
        </section>

        <section className="article-section">
          <h2>자주 묻는 점검 질문</h2>
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
        <RelatedSpokes exclude={["/access"]} />
      </div>
    </main>
  );
}
