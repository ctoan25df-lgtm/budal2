import type { Metadata } from "next";

export const SITE = {
  name: "BUDAL FIELDNOTE",
  koreanName: "부달주소 관찰노트",
  url: "https://budal.yuheungpick.com",
  description:
    "부달주소 확인 방법과 최신 주소 가이드. 부산달리기 공개 채널의 주소 주장을 관찰·대조하는 기준, 부산·경남 생활권·게시판 읽기 방법, 그리고 밤의달인(bamdalin.com) 바로가기를 정리합니다.",
  keywords: [
    "부달주소",
    "부달 주소",
    "부산달리기",
    "부산달리기 주소",
    "부달주소 최신",
    "밤의달인",
    "bamdalin.com",
  ],
  reviewedAt: "2026-08-03",
  status: "재확인 필요",
  linktreeUrl: "https://linktr.ee/busandal",
  telegramUrl: "https://t.me/s/budalinfo",
  alternativeUrl:
    "https://bamdalin.com/?utm_source=budal2&utm_medium=referral&utm_campaign=budal_address",
  email: "desk@budalfieldnote.kr",
} as const;

export const ROUTES = [
  { href: "/", label: "홈" },
  { href: "/address-log", label: "주소 관찰" },
  { href: "/regions", label: "생활권" },
  { href: "/board-guide", label: "게시판 읽기" },
  { href: "/editorial", label: "편집 기준" },
] as const;

/** Canonical-safe absolute URL (no trailing slash; matches Next trailingSlash:false). */
export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE.url;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}

export function breadcrumbSchema(
  items: ReadonlyArray<{ name: string; path: string }>,
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl("/og.png");
  return {
    title,
    description,
    keywords: [...SITE.keywords],
    alternates: { canonical: url },
    openGraph: {
      type: path === "/" ? "website" : "article",
      locale: "ko_KR",
      siteName: SITE.koreanName,
      url,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "부달주소 관찰노트 · 부산달리기 주소 확인 · bamdalin.com 바로가기",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
