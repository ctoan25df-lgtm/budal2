import type { Metadata } from "next";

export const SITE = {
  name: "BUDAL FIELDNOTE",
  koreanName: "부달주소 관찰노트",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://budal-fieldnote-2026.brocpn.chatgpt.site",
  description:
    "부달주소와 부산달리기 관련 공개 채널의 상충하는 주소 주장을 관찰하고, 부산·경남 생활권과 게시판 정보를 판단하는 기준을 제공하는 독립 편집 노트입니다.",
  reviewedAt: "2026-08-03",
  status: "재확인 필요",
  linktreeUrl: "https://linktr.ee/busandal",
  telegramUrl: "https://t.me/s/budalinfo",
  alternativeUrl:
    "https://bamdalin.com/?utm_source=budal2&utm_medium=referral&utm_campaign=transparent_alternative",
  email: "desk@budalfieldnote.kr",
} as const;

export const ROUTES = [
  { href: "/", label: "홈" },
  { href: "/address-log", label: "주소 관찰" },
  { href: "/regions", label: "생활권" },
  { href: "/board-guide", label: "게시판 읽기" },
  { href: "/editorial", label: "편집 기준" },
] as const;

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = new URL(path, SITE.url).toString();
  return {
    title,
    description,
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
          url: new URL("/og.png", SITE.url).toString(),
          width: 1200,
          height: 630,
          alt: "BUDAL FIELDNOTE · 부달주소 관찰노트 · 공개 채널, 생활권, 게시판",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og.png", SITE.url).toString()],
    },
  };
}

export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
