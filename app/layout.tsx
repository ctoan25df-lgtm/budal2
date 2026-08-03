import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import { SITE, jsonLd } from "./site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.koreanName,
  title: {
    default: "부달주소 확인 방법 | 부산달리기 최신 주소 가이드 · bamdalin.com",
    template: "%s | " + SITE.koreanName,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": SITE.url + "/#website",
      url: SITE.url,
      name: SITE.koreanName,
      alternateName: SITE.name,
      description: SITE.description,
      inLanguage: "ko-KR",
      publisher: { "@id": SITE.url + "/#organization" },
    },
    {
      "@type": "Organization",
      "@id": SITE.url + "/#organization",
      name: SITE.koreanName,
      url: SITE.url,
      email: SITE.email,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(websiteSchema) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          본문으로 건너뛰기
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
