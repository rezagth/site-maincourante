import { SeoLandingPage } from "../../_components/seo-landing";
import { articleJsonLd, breadcrumbJsonLd, buildMetadata, faqJsonLd } from "../../../lib/seo";

const faq = [
  {
    question: "Qu'est-ce qu'une plateforme de supervision hospitalière ?",
    answer:
      "C'est un centre de contrôle digital qui regroupe la traçabilité, les alertes, les rôles et les rapports pour piloter les opérations.",
  },
  {
    question: "Pourquoi ce type de plateforme aide-t-il le SEO ?",
    answer:
      "Parce que les requêtes associées sont très proches de l'intention d'achat et permettent d'expliquer clairement la valeur produit.",
  },
  {
    question: "NORYX peut-il jouer ce rôle ?",
    answer:
      "Oui. Le positionnement NORYX est exactement celui d'une plateforme de supervision et de traçabilité en temps réel.",
  },
];

export const metadata = buildMetadata({
  title: "Plateforme de supervision hospitalière | NORYX",
  description:
    "Guide sur la plateforme de supervision hospitalière: architecture, KPI, traçabilité, déploiement et critères de décision.",
  canonicalPath: "/guides/plateforme-supervision-hospitaliere",
  keywords: [
    "plateforme supervision hospitalière",
    "supervision hospitalière",
    "traçabilité hospitalière",
  ],
});

export default function Page() {
  return (
    <SeoLandingPage
      title="La plateforme de supervision hospitalière comme centre de contrôle"
      description="Ce guide explique pourquoi une plateforme de supervision hospitalière doit centraliser les opérations, la conformité et les rapports."
      canonicalPath="/guides/plateforme-supervision-hospitaliere"
      keywordLabel="Plateforme de supervision"
      intro="Les établissements hospitaliers attendent une vue consolidée, des responsabilités claires et des rapports exploitables. Le site doit refléter cette attente."
      highlights={["Centre de contrôle", "KPI", "Multi-sites", "Audit"]}
      proofPoints={[
        { label: "Valeur", value: "Pilotage" },
        { label: "Support", value: "Direction" },
        { label: "Résultat", value: "Décision" },
      ]}
      sections={[
        {
          eyebrow: "Architecture",
          title: "Une bonne plateforme doit réunir les flux critiques",
          description:
            "Le pilotage hospitalier devient plus fiable quand les incidents, les rondes et les rapports sont unifiés.",
          bullets: ["Données unifiées", "Vue consolidée", "Réduction des silos"],
        },
        {
          eyebrow: "KPI",
          title: "Les indicateurs doivent rester utiles et lisibles",
          description:
            "Le dashboard doit aider à comprendre l'état des opérations sans demander d'analyse complexe.",
          bullets: ["Volumes", "Délais", "Priorités"],
        },
        {
          eyebrow: "GEO",
          title: "Un texte clair pour les moteurs génératifs",
          description:
            "Les LLM extraient mieux un contenu qui explicite la définition, les bénéfices et les cas d'usage.",
          bullets: ["Définition explicite", "Cas d'usage", "FAQ lisible"],
        },
      ]}
      faq={faq}
      relatedLinks={[
        { label: "Plateforme opérations hospitalières", href: "/plateforme-operations-hospitalieres", description: "Voir la page de conversion principale." },
        { label: "Ressources", href: "/ressources", description: "Retour au hub éditorial." },
        { label: "Comparatif papier vs digitale", href: "/guides/comparatif-main-courante-papier-digitale", description: "Voir le guide comparatif." },
      ]}
      ctaPrimaryLabel="Demander une démo"
      ctaPrimaryHref="/demo"
      ctaSecondaryLabel="Voir la plateforme"
      ctaSecondaryHref="/platform"
      structuredData={[
        breadcrumbJsonLd([
          { label: "Accueil", href: "/" },
          { label: "Ressources", href: "/ressources" },
          { label: "Plateforme de supervision hospitalière", href: "/guides/plateforme-supervision-hospitaliere" },
        ]),
        articleJsonLd({
          headline: "Plateforme de supervision hospitalière",
          description:
            "Guide sur la plateforme de supervision hospitalière: architecture, KPI, traçabilité, déploiement et critères de décision.",
          path: "/guides/plateforme-supervision-hospitaliere",
        }),
        faqJsonLd(faq),
      ]}
    />
  );
}
