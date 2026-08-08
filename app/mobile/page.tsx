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

const title = "부달주소 모바일 접속 | 홈화면은 관찰 허브 기준";
const description =
  "부달·부산달리기 모바일 접속 순서. iOS·Android에서 공개 채널을 대조한 뒤, 숫자형 도메인 대신 관찰 허브를 홈 화면에 두는 방법을 안내합니다.";

export const metadata: Metadata = pageMetadata(title, description, "/mobile");

const steps = [
  {
    name: "모바일 브라우저로 관찰 허브 열기",
    text: "Safari 또는 Chrome에서 이 관찰 노트 주소를 연 뒤, 확인일과 상태(재확인 필요 여부)를 먼저 봅니다.",
  },
  {
    name: "공개 채널을 같은 기기에서 대조",
    text: "norangbudal 생활권 허브와 Telegram CS(@bamdalincs)를 같은 기기에서 열어 표시 호스트를 적어 두고, 서로 일치하는지 확인합니다.",
  },
  {
    name: "홈 화면에는 허브 또는 검증된 채널을 추가",
    text: "확정되지 않은 숫자형 도메인을 바로 고정하지 말고, 이 허브나 기존에 대조한 공개 채널을 홈 화면에 둡니다.",
  },
];

const FAQ = [
  {
    q: "앱 스토어에 부달 앱이 있으면 설치해도 되나요?",
    a: "운영 주체가 명확하지 않은 앱·APK는 설치하지 않는 편이 안전합니다. 이 노트는 웹 공개 채널 관찰만 다루며, 제3자 앱의 공식성을 인증하지 않습니다.",
  },
  {
    q: "홈 화면에 추가하면 주소가 자동으로 갱신되나요?",
    a: "아니요. 홈 화면 바로가기는 저장 시점의 URL을 가리킵니다. 그래서 자주 바뀌는 숫자형 호스트보다 관찰 허브를 고정하는 쪽이 확인일을 다시 보기 쉽습니다.",
  },
  {
    q: "지하철·해변처럼 신호가 약한 곳에서는요?",
    a: "오프라인에서 새 주소를 ‘추측’하지 마세요. 연결이 회복된 뒤 채널 공지를 다시 확인하고, 생활권·귀가 방향은 norangbudal.com 이동축 가이드를 참고하세요.",
  },
];

export default function MobilePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        url: absoluteUrl("/mobile"),
        name: title,
        description,
        dateModified: SITE.reviewedAt,
        inLanguage: "ko-KR",
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
        { name: "모바일", path: "/mobile" },
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
        <Breadcrumb current="모바일" />
        <ArticleHeader
          issue="FIELD NOTE · MOBILE"
          title={title}
          lead="모바일에서도 ‘빠른 접속’보다 ‘같은 호스트인지’가 먼저입니다. 홈 화면 아이콘은 관찰 허브를 기준으로 두는 편이 안전합니다."
        />
        <ReviewStatusAside />

        <section className="article-section">
          <h2>모바일에서 먼저 할 일</h2>
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
          <h2>iOS (Safari)</h2>
          <p>
            공유 버튼 → “홈 화면에 추가”로 이 관찰 허브 URL을 저장합니다. 이미
            숫자형 도메인을 추가해 두었다면, 확인일이 지난 뒤에는{" "}
            <Link href="/bookmark">즐겨찾기 기준</Link>에 따라 허브로
            교체하는 것이 좋습니다. 위치·알림 권한은 주소 확인과 무관하게
            최소로 두는 편이 안전합니다.
          </p>
        </section>

        <section className="article-section">
          <h2>Android (Chrome 등)</h2>
          <p>
            메뉴의 “홈 화면에 추가” 또는 “바로가기”로 허브를 고정합니다. 제조사별
            배터리 최적화 때문에 백그라운드 알림이 끊겨도, 주소 확정과는 별개
            문제입니다. 접속이 안 되면{" "}
            <Link href="/access">접속 점검</Link> 순서를 먼저 적용하세요.
          </p>
        </section>

        <section className="article-section">
          <h2>자주 묻는 질문</h2>
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
        <RelatedSpokes exclude={["/mobile"]} />
      </div>
    </main>
  );
}
