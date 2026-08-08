import type { Metadata } from "next";

export const SITE = {
  name: "BUDAL FIELDNOTE",
  koreanName: "부달주소 관찰노트",
  url: "https://budal.yuheungpick.com",
  description:
    "부달주소·부산달리기 주소 관찰노트. 밤의달인(밤달) 목록과 생활권 허브(norangbudal)·Telegram CS를 구분해 안내하고, 공개 출처가 어긋나면 확정을 보류하는 기준과 부산·경남 생활권·게시판 읽기 방법을 정리합니다.",
  keywords: [
    "부달주소",
    "부산달리기",
    "부달 최신주소",
    "부달 접속",
    "부달 사칭",
    "부달 공개채널",
    "밤달 Telegram",
    "norangbudal",
    "부산달리기 주소 관찰",
  ],
  reviewedAt: "2026-08-08",
  status: "재확인 필요",
  /** 생활권·링크 허브 (daligi) — 밤달 목록과 별개 */
  linktreeUrl: "https://norangbudal.com",
  linktreeLabel: "생활권 허브",
  telegramUrl: "https://t.me/bamdalincs",
  telegramLabel: "밤달 CS",
  geographyUrl: "https://norangbudal.com",
  alternativeUrl:
    "https://bamdalin.com/board/region/busan?utm_source=budal2&utm_medium=referral&utm_campaign=budal_address",
  gyeongnamListingUrl:
    "https://bamdalin.com/board/region/gyeongnam?utm_source=budal2&utm_medium=referral&utm_campaign=budal_address",
  ulsanListingUrl:
    "https://bamdalin.com/board/region/ulsan?utm_source=budal2&utm_medium=referral&utm_campaign=budal_address",
  email: "desk@budalfieldnote.kr",
} as const;

export function bamdalinRegionUrl(slug: string) {
  return `https://bamdalin.com/board/region/${slug}?utm_source=budal2&utm_medium=referral&utm_campaign=budal_address`;
}

/** Full route list for sitemap, footer, and hub cards. */
export const ROUTES = [
  { href: "/", label: "홈" },
  { href: "/address-log", label: "주소 관찰" },
  { href: "/access", label: "접속" },
  { href: "/safety", label: "안전" },
  { href: "/faq", label: "FAQ" },
  { href: "/regions", label: "생활권" },
  { href: "/mobile", label: "모바일" },
  { href: "/bookmark", label: "즐겨찾기" },
  { href: "/board-guide", label: "게시판 읽기" },
  { href: "/editorial", label: "편집 기준" },
] as const;

/** Primary nav (avoid overcrowding). Rest live in footer / hub cards. */
export const NAV_ROUTES = [
  { href: "/", label: "홈" },
  { href: "/address-log", label: "주소 관찰" },
  { href: "/access", label: "접속" },
  { href: "/safety", label: "안전" },
  { href: "/faq", label: "FAQ" },
  { href: "/regions", label: "생활권" },
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
          alt: "부달주소 관찰노트 · 부산달리기 주소 확인 · 밤의달인(밤달) 바로가기",
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
