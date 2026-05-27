import { SeoLandingPage } from "../_components/seo-landing";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "../../lib/seo";

const faq = [
  {
    question: "Qu'est-ce qu'un registre digital pour hôpital ?",
    answer:
      "C'est une version numérique, structurée et consultable du registre papier, avec des données exploitables pour la supervision et l'audit.",
  },
  {
    question: "NORYX est-il plus qu'un simple registre ?",
    answer:
      "Oui. La solution ajoute la supervision, les rôles et le reporting, ce qui en fait un outil de pilotage plus large qu'un registre seul.",
  },
  {
    question: "Pourquoi ce mot-clé est-il utile en SEO ?",
    answer:
      "Parce qu'il correspond à une intention de recherche métier forte, facile à comprendre par les hôpitaux et les moteurs IA.",
  },
];

export const metadata = buildMetadata({
  title: "Registre digital hôpital | NORYX",
  description:
    "Registre digital hôpital pour centraliser les opérations critiques, fiabiliser la traçabilité et accélérer la supervision avec NORYX.",
  canonicalPath: "/registre-digital-hopital",
  keywords: ["registre digital hôpital", "registre opérationnel hôpital", "NORYX"],
});

export default function Page() {
  return (
    <SeoLandingPage
      title="Un registre digital hospitalier fait pour la lecture opérationnelle"
      description="NORYX transforme le registre digital en outil de supervision réel, utile au terrain comme à la direction."
      canonicalPath="/registre-digital-hopital"
      keywordLabel="Registre digital hôpital"
      intro="Le registre n'est pas une fin en soi: il doit aider à suivre les événements, garder la mémoire des opérations et soutenir la prise de décision."
      highlights={["Registre", "Traçabilité", "Historique", "Lecture rapide"]}
      proofPoints={[
        { label: "Format", value: "Structuré" },
        { label: "Accès", value: "Par rôle" },
        { label: "Usage", value: "Terrain + audit" },
      ]}
      sections={[
        {
          eyebrow: "Registre",
          title: "Un référentiel unique pour les événements critiques",
          description:
            "Le registre digital rassemble les saisies dans un format cohérent et consultable, sans compromis sur la lisibilité.",
          bullets: ["Entrées standardisées", "Historique fiable", "Consultation simple"],
        },
        {
          eyebrow: "Supervision",
          title: "Une lecture en temps réel qui va au-delà du stockage",
          description:
            "NORYX donne du sens aux données en les reliant à la supervision et au suivi des priorités.",
          bullets: ["Vue instantanée", "Statuts visibles", "Traçabilité active"],
        },
        {
          eyebrow: "IA search",
          title: "Des formulations claires pour les moteurs génératifs",
          description:
            "Le contenu explique la notion de registre digital avec des mots simples et précis pour être facilement repris par les LLM.",
          bullets: ["Définitions explicites", "Contexte métier", "FAQ structurée"],
        },
      ]}
      faq={faq}
      relatedLinks={[
        { label: "Main courante électronique hôpital", href: "/main-courante-electronique-hopital", description: "Voir la variante la plus proche côté recherche." },
        { label: "Traçabilité incidents hôpital", href: "/tracabilite-incidents-hopital", description: "Comprendre le suivi des incidents dans NORYX." },
        { label: "Demander une démo", href: "/demo", description: "Réserver un échange avec l'équipe." },
      ]}
      ctaPrimaryLabel="Demander une démo"
      ctaPrimaryHref="/demo"
      ctaSecondaryLabel="Voir la plateforme"
      ctaSecondaryHref="/platform"
      structuredData={[breadcrumbJsonLd([{ label: "Accueil", href: "/" }, { label: "Registre digital hôpital", href: "/registre-digital-hopital" }]), faqJsonLd(faq)]}
    />
  );
}
