import Link from "next/link";
import { ROUTES, SITE } from "../site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link href="/" className="brand" aria-label={SITE.koreanName + " 홈"}>
          <span className="brand-number">21</span>
          <span>
            <strong>BUDAL</strong>
            <small>FIELDNOTE</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          {ROUTES.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <nav className="mobile-nav" aria-label="모바일 주요 메뉴">
        {ROUTES.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <div>
          <p className="footer-title">{SITE.koreanName}</p>
          <p>
            부산달리기 운영 주체와 무관한 독립 편집 노트입니다. 공개 채널의
            주소 주장을 기록하지만 공식성, 소유권, 개별 정보의 정확성을 보증하지
            않습니다.
          </p>
        </div>
        <nav aria-label="하단 메뉴">
          {ROUTES.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a href={"mailto:" + SITE.email}>정정 제보</a>
        </nav>
      </div>
      <p className="wrap copyright">
        공개 자료 검토 {SITE.reviewedAt} · © 2026 {SITE.name}
      </p>
    </footer>
  );
}

export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav className="breadcrumb" aria-label="현재 위치">
      <Link href="/">HOME</Link>
      <span aria-hidden="true">→</span>
      <span>{current}</span>
    </nav>
  );
}

export function ArticleHeader({
  issue,
  title,
  lead,
}: {
  issue: string;
  title: string;
  lead: string;
}) {
  return (
    <header className="article-header">
      <p className="issue-label">{issue}</p>
      <h1>{title}</h1>
      <p className="article-lead">{lead}</p>
    </header>
  );
}

export function BamdalinPanel() {
  return (
    <section className="alternative-panel">
      <div>
        <p className="issue-label">SEPARATE PLATFORM · SPONSORED</p>
        <h2>밤의달인 바로가기</h2>
        <p>
          bamdalin.com은 부산달리기 공식 사이트가 아닌 별개 플랫폼입니다.
          부산·경남 정보는 밤의달인(<strong>bamdalin.com</strong>)에서 확인할 수
          있습니다.
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
  );
}
