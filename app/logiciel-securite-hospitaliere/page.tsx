import { SeoLandingPage } from "../_components/seo-landing";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "../../lib/seo";

const faq = [
  {
    question: "OPERIA est-il un logiciel de sécurité hospitalière ?",
    answer:
      "OPERIA couvre la supervision et la traçabilité des opérations hospitalières critiques, avec une orientation claire sécurité et conformité.",
  },
  {
    question: "Qu'apporte-t-il aux équipes de sécurité ?",
    answer:
      "Une remontée plus rapide des incidents, un suivi centralisé et une lecture plus claire des priorités en temps réel.",
  },
  {
    question: "Le logiciel convient-il à un usage enterprise ?",
    answer:
      "Oui. Le discours produit, le niveau de détail et la structure des pages sont pensés pour des acheteurs hospitaliers et des cycles de vente B2B complexes.",
  },
];

export const metadata = buildMetadata({
  title: "Logiciel sécurité hospitalière | OPERIA",
  description:
    "Logiciel de sécurité hospitalière pour centraliser les incidents, les rondes, la supervision et la traçabilité en temps réel.",
  canonicalPath: "/logiciel-securite-hospitaliere",
  keywords: ["logiciel sécurité hospitalière", "supervision sécurité hospitalière", "OPERIA"],
});

export default function Page() {
  return (
    <SeoLandingPage
      title="Le logiciel de sécurité hospitalière qui centralise l'opérationnel"
      description="OPERIA aide les établissements à suivre les incidents, les rondes et les alertes dans une plateforme claire, sobre et crédible."
      canonicalPath="/logiciel-securite-hospitaliere"
      keywordLabel="Logiciel sécurité hospitalière"
      intro="La page est conçue pour répondre aux recherches d'équipes de sécurité hospitalière qui veulent une solution sérieuse, compatible avec des exigences d'audit et de supervision avancée."
      highlights={["Sécurité", "Conformité", "Temps réel", "Multi-sites"]}
      proofPoints={[
        { label: "Priorité", value: "Incidents" },
        { label: "Lecture", value: "Terrain + direction" },
        { label: "Objectif", value: "Réduire les écarts" },
      ]}
      sections={[
        {
          eyebrow: "Usage métier",
          title: "Une supervision pensée pour les équipes sécurité",
          description:
            "Les responsables gagnent une vision claire des événements, des statuts et des actions de suivi, sans rompre avec les habitudes terrain.",
          bullets: ["Vue temps réel", "Responsabilités visibles", "Historique consolidé"],
        },
        {
          eyebrow: "Rassurance",
          title: "Un langage produit adapté aux hôpitaux",
          description:
            "OPERIA ne se présente pas comme un outil gadget: le positionnement met en avant la conformité, la stabilité et l'audit.",
          bullets: ["Crédibilité enterprise", "Formulation sobre", "Focus hospitalier"],
        },
        {
          eyebrow: "Conversion",
          title: "Un angle de vente orienté démo",
          description:
            "Les CTA renvoient vers une démonstration concrète, utile pour qualifier un besoin et faire avancer un cycle de vente B2B.",
          bullets: ["CTA démo", "CTA plateforme", "CTA contact"],
        },
      ]}
      faq={faq}
      relatedLinks={[
        { label: "Supervision sécurité hospitalière", href: "/supervision-securite-hospitaliere", description: "Voir le volet supervision temps réel et coordination." },
        { label: "Traçabilité incidents hôpital", href: "/tracabilite-incidents-hopital", description: "Comprendre le suivi détaillé des incidents." },
        { label: "Demander une démo", href: "/demo", description: "Planifier une présentation adaptée à votre établissement." },
      ]}
      ctaPrimaryLabel="Demander une démo"
      ctaPrimaryHref="/demo"
      ctaSecondaryLabel="Voir la plateforme"
      ctaSecondaryHref="/platform"
      structuredData={[breadcrumbJsonLd([{ label: "Accueil", href: "/" }, { label: "Logiciel sécurité hospitalière", href: "/logiciel-securite-hospitaliere" }]), faqJsonLd(faq)]}
    />
  );
}
