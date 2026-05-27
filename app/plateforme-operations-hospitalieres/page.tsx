import { SeoLandingPage } from "../_components/seo-landing";
import { articleJsonLd, breadcrumbJsonLd, buildMetadata, faqJsonLd, serviceJsonLd } from "../../lib/seo";

const faq = [
  {
    question: "Qu'est-ce qu'une plateforme d'opérations hospitalières ?",
    answer:
      "C'est un environnement central qui agrège la traçabilité, la supervision, le reporting et les rôles pour simplifier le pilotage opérationnel.",
  },
  {
    question: "OPERIA est-il adapté à plusieurs établissements ?",
    answer:
      "Oui. La structure multi-sites permet de comparer et de consolider les données d'un établissement à l'autre.",
  },
  {
    question: "Pourquoi ce positionnement aide-t-il la conversion ?",
    answer:
      "Parce qu'il parle directement aux directions hospitalières: moins d'erreurs, plus de contrôle, meilleure visibilité et meilleure conformité.",
  },
];

export const metadata = buildMetadata({
  title: "Plateforme opérations hospitalières | OPERIA",
  description:
    "Découvrez OPERIA, la plateforme d'opérations hospitalières qui centralise la supervision, la traçabilité et le reporting en temps réel.",
  canonicalPath: "/plateforme-operations-hospitalieres",
  keywords: ["plateforme opérations hospitalières", "centre de contrôle hospitalier", "OPERIA"],
});

export default function Page() {
  return (
    <SeoLandingPage
      title="La plateforme d'opérations hospitalières pensée comme un centre de contrôle"
      description="OPERIA centralise les flux critiques de l'hôpital dans une interface unique, premium et facile à lire pour les équipes et les décideurs."
      canonicalPath="/plateforme-operations-hospitalieres"
      keywordLabel="Plateforme opérations hospitalières"
      intro="Cette page cible les requêtes les plus proches de l'intention de démo, avec un langage qui positionne OPERIA comme une solution déjà mature pour l'hôpital."
      highlights={["Centre de contrôle", "Multi-sites", "Reporting", "Audit" ]}
      proofPoints={[
        { label: "Vision", value: "Globale" },
        { label: "Décision", value: "Rapide" },
        { label: "Usage", value: "Enterprise" },
      ]}
      sections={[
        {
          eyebrow: "Architecture produit",
          title: "Un point de contrôle unique pour les opérations critiques",
          description:
            "OPERIA évite la dispersion des outils et sert de hub central pour les événements, les rondes et les rapports.",
          bullets: ["Hub central", "Flux unifiés", "Contexte partagé"],
        },
        {
          eyebrow: "Pilotage",
          title: "Des tableaux de bord utiles, pas décoratifs",
          description:
            "Les KPIs mettent en avant ce qu'un responsable doit vraiment surveiller: volumes, délais, priorités et historique.",
          bullets: ["KPIs lisibles", "Alertes utiles", "Analyse rapide"],
        },
        {
          eyebrow: "Déploiement",
          title: "Une solution présentable en rendez-vous comité",
          description:
            "Le site et la structure des pages renforcent la crédibilité enterprise pour des tickets mensuels élevés.",
          bullets: ["Positionnement premium", "CTA démo", "Confiance hôpital"],
        },
      ]}
      faq={faq}
      relatedLinks={[
        { label: "Registre digital hôpital", href: "/registre-digital-hopital", description: "Voir la logique de registre numérique." },
        { label: "Logiciel incidents hospitaliers", href: "/logiciel-incidents-hospitaliers", description: "Comprendre le suivi des incidents dans OPERIA." },
        { label: "Ressources OPERIA", href: "/ressources", description: "Accéder au hub éditorial et aux guides." },
        { label: "Guide plateforme de supervision", href: "/guides/plateforme-supervision-hospitaliere", description: "Lire le guide sur la supervision hospitalière." },
      ]}
      ctaPrimaryLabel="Demander une démo"
      ctaPrimaryHref="/demo"
      ctaSecondaryLabel="Voir la plateforme"
      ctaSecondaryHref="/platform"
      structuredData={[
        serviceJsonLd(
          "Plateforme d'opérations hospitalières",
          "OPERIA centralise les flux critiques de l'hôpital dans une interface unique, premium et facile à lire pour les équipes et les décideurs.",
          "/plateforme-operations-hospitalieres",
        ),
        articleJsonLd({
          headline: "Plateforme opérations hospitalières",
          description:
            "Découvrez OPERIA, la plateforme d'opérations hospitalières qui centralise la supervision, la traçabilité et le reporting en temps réel.",
          path: "/plateforme-operations-hospitalieres",
        }),
        breadcrumbJsonLd([{ label: "Accueil", href: "/" }, { label: "Plateforme opérations hospitalières", href: "/plateforme-operations-hospitalieres" }]),
        faqJsonLd(faq),
      ]}
    />
  );
}
