import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { organizationJsonLd, siteDescription, siteName, siteUrl, softwareApplicationJsonLd, websiteJsonLd } from "../lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Supervision hospitalière temps réel`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  authors: [{ name: siteName, url: siteUrl }],
  openGraph: {
    title: `${siteName} — Supervision hospitalière temps réel`,
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [{ url: "/og-home.svg", width: 1200, height: 630, alt: siteName }],
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "/", languages: { "fr-FR": "/" } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXX";
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="language" content="fr" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        <meta name="geo.position" content="48.8566;2.3522" />
        <meta name="theme-color" content="#050508" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preload" as="image" href="/og-home.svg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd()) }} />
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');` }} />
      </head>
      <body>
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        {children}
      </body>
    </html>
  );
}
