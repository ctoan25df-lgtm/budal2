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

const title = "부달 사칭·안전 점검 | 채널·호스트 대조 5단계";
const description =
  "부달·부산달리기 사칭·짝퉁 징후를 공개 채널·호스트·HTTPS·로그인 유도 시점으로 가려내는 5단계 안전 점검. 공식 인증이 아닌 관찰 기준입니다.";

export const metadata: Metadata = pageMetadata(title, description, "/safety");

const steps = [
  {
    name: "접속 경로 확인",
    text: "검색 광고·쪽지·단축 링크보다 기존에 쓰던 공개 채널에서 출발했는지 확인합니다.",
  },
  {
    name: "도메인·호스트 확인",
    text: "주소창의 호스트를 끝까지 읽고, 생활권 허브·Telegram CS 표시와 같은지 한 줄로 적습니다.",
  },
  {
    name: "HTTPS·인증서 경고 확인",
    text: "브라우저 보안 경고가 있으면 로그인을 시도하지 않고 연결을 끊습니다.",
  },
  {
    name: "디자인·문구만으로 판단하지 않기",
    text: "로고·‘공식’ 배너·비슷한 UI는 복제될 수 있습니다. 시각적 유사성은 근거로 쓰지 않습니다.",
  },
  {
    name: "로그인·결제·앱 설치 전 재대조",
    text: "계정·결제 정보를 넣기 직전에 채널 일치를 한 번 더 확인하고, 어긋나면 즉시 중단합니다.",
  },
];

const FAQ = [
  {
    q: "검색 1위면 안전한가요?",
    a: "아닙니다. 순위는 노출일 뿐 운영 주체·안전성을 증명하지 않습니다. 공개 채널과의 호스트 일치가 더 중요합니다.",
  },
  {
    q: "친구가 보낸 링크는 믿어도 되나요?",
    a: "전달 경로와 무관하게 주소창 호스트와 공개 채널을 대조하세요. 메신저 미리보기만으로 확정하지 않습니다.",
  },
  {
    q: "이미 로그인했다면 어떻게 하나요?",
    a: "해당 사이트에서 로그아웃하고 비밀번호를 변경한 뒤, 같은 비밀번호를 쓰는 다른 서비스도 점검하세요. 결제가 있었다면 카드사·결제 내역을 확인합니다.",
  },
];

export default function SafetyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        url: absoluteUrl("/safety"),
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
        { name: "안전", path: "/safety" },
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
        <Breadcrumb current="안전" />
        <ArticleHeader
          issue="FIELD NOTE · SAFETY"
          title={title}
          lead="사칭은 ‘공식’이라는 단어로 시작되는 경우가 많습니다. 이 노트는 채널·호스트 대조로 입력을 멈추는 시점만 정리합니다."
        />
        <ReviewStatusAside />

        <section className="article-section">
          <h2>이 노트와 다른 안내의 차이</h2>
          <p>
            외부 링크를 누르기 직전의 일반 점검은{" "}
            <a
              href={`${SITE.geographyUrl}/guide/official-access`}
              target="_blank"
              rel="noopener noreferrer"
            >
              norangbudal.com 접속 안내
            </a>
            를 참고하세요. 여기서는 부달·부산달리기{" "}
            <strong>채널·호스트 사칭</strong>에 초점을 둡니다. 특정 도메인
            블랙리스트를 대신 관리하지 않으며, 관찰 시점마다 표기가 달라질 수
            있습니다.
          </p>
        </section>

        <section className="article-section">
          <h2>5단계 점검</h2>
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
          <h2>즉시 중단 신호</h2>
          <ul className="boxed-list">
            <li>공개 채널과 다른 호스트인데 즉시 로그인을 요구</li>
            <li>APK·알 수 없는 앱 설치를 강제</li>
            <li>지갑·OTP·신분증 사진을 접속 초기에 요구</li>
            <li>숫자 +1 도메인만 안내하고 채널 근거가 없음</li>
            <li>브라우저 보안 경고를 무시하라고 유도</li>
          </ul>
          <p>
            접속 자체가 안 되는 경우는{" "}
            <Link href="/access">접속 점검</Link>, 주소 표기 대조는{" "}
            <Link href="/address-log">주소 관찰</Link>을 이어서 보세요.
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
        <RelatedSpokes exclude={["/safety"]} />
      </div>
    </main>
  );
}
