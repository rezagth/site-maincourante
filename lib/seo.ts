import type { Metadata } from "next";

export const siteName = "OPERIA";
export const siteUrl = "https://operia.example";
export const siteDescription =
  "OPERIA est la plateforme de traçabilité et de supervision en temps réel des opérations hospitalières critiques.";

type BuildMetadataArgs = {
  title: string;
  description: string;
  canonicalPath: string;
  keywords?: string[];
  ogImagePath?: string;
};

export function buildMetadata({
  title,
  description,
  canonicalPath,
  keywords = [],
  ogImagePath = "/og-home.svg",
}: BuildMetadataArgs): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords,
    applicationName: siteName,
    category: "healthcare software",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: `${siteName} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImagePath],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    sameAs: [],
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: siteUrl,
    description: siteDescription,
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/recherche?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    areaServed: "FR",
    serviceType: name,
    url: `${siteUrl}${path}`,
  };
}

export function articleJsonLd(args: {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.headline,
    description: args.description,
    datePublished: args.datePublished ?? "2026-05-27",
    dateModified: args.dateModified ?? "2026-05-27",
    author: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}${args.path}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
  };
}

export function collectionPageJsonLd(args: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: args.name,
    description: args.description,
    url: `${siteUrl}${args.path}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ label: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteUrl}${item.href}`,
    })),
  };
}

export function faqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
