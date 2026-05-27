import { SeoLandingPage } from "../_components/seo-landing";
import { breadcrumbJsonLd, buildMetadata, collectionPageJsonLd, siteDescription } from "../../lib/seo";

const faq = [
  {
    question: "Pourquoi créer une page ressources ?",
    answer:
      "Pour regrouper les contenus long-form, renforcer le maillage interne et aider les moteurs IA à comprendre le périmètre métier d'OPERIA.",
  },
  {
    question: "Les ressources servent-elles le SEO ?",
    answer:
      "Oui. Elles captent des recherches plus longues et soutiennent les pages de conversion sur les mots-clés hospitaliers prioritaires.",
  },
  {
    question: "Cette page remplace-t-elle la home ?",
    answer:
      "Non. Elle sert de hub éditorial et de passerelle entre les guides, les comparatifs et les pages produit.",
  },
];

export const metadata = buildMetadata({
  title: "Ressources OPERIA | Guides hospitaliers et supervision",
  description:
    "Ressources OPERIA: guides, comparatifs et contenus SEO pour la traçabilité hospitalière, la supervision et la main courante digitale.",
  canonicalPath: "/ressources",
  keywords: ["ressources OPERIA", "guides hospitaliers", "SEO hospitalier", "traçabilité hospitalière"],
});

export default function ResourcesPage() {
  return (
    <SeoLandingPage
      title="Ressources OPERIA pour les hôpitaux et les décideurs"
      description="Une page hub qui rassemble les contenus essentiels sur la supervision hospitalière, la main courante électronique et le pilotage opérationnel."
      canonicalPath="/ressources"
      keywordLabel="Ressources"
      intro={siteDescription}
      highlights={["Guides", "Comparatifs", "FAQ", "Maillage interne"]}
      proofPoints={[
        { label: "Objectif", value: "Longue traîne" },
        { label: "Usage", value: "Éditorial" },
        { label: "Bénéfice", value: "Plus d'autorité" },
      ]}
      sections={[
        {
          eyebrow: "Guides",
          title: "Contenus pensés pour les questions réelles des établissements",
          description:
            "Les pages ressources expliquent les notions clés avec un vocabulaire simple et exploitable par les moteurs IA.",
          bullets: ["Guides longs", "Terminologie métier", "Réponses explicites"],
        },
        {
          eyebrow: "Comparatifs",
          title: "Aider les équipes à comprendre les choix possibles",
          description:
            "Les comparatifs permettent de positionner OPERIA face au papier, aux outils génériques et aux besoins hospitaliers.",
          bullets: ["Papier vs digital", "Choix logiciel", "Pilotage multi-sites"],
        },
        {
          eyebrow: "IA search",
          title: "Structurer les réponses pour l'extraction par les LLM",
          description:
            "Le hub rassemble des contenus avec définitions, FAQ et hiérarchie claire pour améliorer la lisibilité générative.",
          bullets: ["FAQ détaillées", "Définitions", "Structure sémantique"],
        },
      ]}
      faq={faq}
      relatedLinks={[
        { label: "Comparatif main courante papier vs digitale", href: "/guides/comparatif-main-courante-papier-digitale", description: "Lire le comparatif complet." },
        { label: "Choisir un logiciel sécurité hospitalière", href: "/guides/choisir-logiciel-securite-hospitaliere", description: "Voir les critères de choix." },
        { label: "Plateforme de supervision hospitalière", href: "/guides/plateforme-supervision-hospitaliere", description: "Comprendre le centre de contrôle digital." },
      ]}
      ctaPrimaryLabel="Demander une démo"
      ctaPrimaryHref="/demo"
      ctaSecondaryLabel="Voir la plateforme"
      ctaSecondaryHref="/platform"
      structuredData={[
        breadcrumbJsonLd([{ label: "Accueil", href: "/" }, { label: "Ressources", href: "/ressources" }]),
        collectionPageJsonLd({ name: "Ressources OPERIA", description: siteDescription, path: "/ressources" }),
      ]}
    />
  );
}
