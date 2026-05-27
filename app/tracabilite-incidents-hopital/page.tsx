import { SeoLandingPage } from "../_components/seo-landing";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "../../lib/seo";

const faq = [
  {
    question: "Que signifie la traçabilité des incidents hospitaliers ?",
    answer:
      "C'est la capacité à documenter un incident avec son contexte, son heure, son auteur, sa localisation et son état de traitement.",
  },
  {
    question: "Pourquoi est-ce important pour la sécurité ?",
    answer:
      "Parce que la traçabilité réduit les zones d'ombre, accélère la coordination et améliore la qualité de l'audit interne.",
  },
  {
    question: "NORYX peut-il servir de registre d'événements ?",
    answer:
      "Oui. NORYX est conçu comme un registre digital et un centre de supervision, pas comme une simple fiche de saisie.",
  },
];

export const metadata = buildMetadata({
  title: "Traçabilité incidents hôpital | NORYX",
  description:
    "Centralisez la traçabilité des incidents hôpital avec NORYX: registre digital, suivi temps réel et reporting exploitable.",
  canonicalPath: "/tracabilite-incidents-hopital",
  keywords: ["traçabilité incidents hôpital", "incidents hospitaliers", "registre digital hôpital"],
});

export default function Page() {
  return (
    <SeoLandingPage
      title="La traçabilité des incidents hospitaliers, enfin lisible et centralisée"
      description="NORYX aide les hôpitaux à documenter, suivre et analyser les incidents dans une interface claire, rapide et conforme aux attentes opérationnelles."
      canonicalPath="/tracabilite-incidents-hopital"
      keywordLabel="Traçabilité incidents hôpital"
      intro="La page cible les équipes qui recherchent une solution pour fiabiliser la chaîne de traitement des événements hospitaliers et disposer d'un historique immédiatement exploitable."
      highlights={["Registre digital", "Audit", "Historique", "Suivi temps réel"]}
      proofPoints={[
        { label: "Contexte", value: "Signalement complet" },
        { label: "Lecture", value: "Historique clair" },
        { label: "Bénéfice", value: "Décision rapide" },
      ]}
      sections={[
        {
          eyebrow: "Traçabilité",
          title: "Capturer plus que l'incident lui-même",
          description:
            "NORYX conserve le contexte, les responsabilités et le suivi pour rendre chaque événement compréhensible à la relecture.",
          bullets: ["Chronologie claire", "Données structurées", "Recherche rapide"],
        },
        {
          eyebrow: "Analyse",
          title: "Identifier les récurrences et les zones sensibles",
          description:
            "Un historique propre permet de voir les tendances, de comparer les périodes et d'anticiper les risques récurrents.",
          bullets: ["Tendances visibles", "Points sensibles", "Comparaisons par période"],
        },
        {
          eyebrow: "Reporting",
          title: "Produire des rapports utiles à la direction",
          description:
            "Les exports et les vues consolidées facilitent la revue managériale, les points sécurité et les contrôles.",
          bullets: ["Exports propres", "Vue consolidée", "Lecture direction"],
        },
      ]}
      faq={faq}
      relatedLinks={[
        { label: "Logiciel incidents hospitaliers", href: "/logiciel-incidents-hospitaliers", description: "Voir la page dédiée au suivi et au traitement des incidents." },
        { label: "Registre digital hôpital", href: "/registre-digital-hopital", description: "Comprendre la logique de registre et de traçabilité." },
        { label: "Demander une démo", href: "/demo", description: "Qualifier votre besoin avec l'équipe NORYX." },
      ]}
      ctaPrimaryLabel="Demander une démo"
      ctaPrimaryHref="/demo"
      ctaSecondaryLabel="Voir la plateforme"
      ctaSecondaryHref="/platform"
      structuredData={[breadcrumbJsonLd([{ label: "Accueil", href: "/" }, { label: "Traçabilité incidents hôpital", href: "/tracabilite-incidents-hopital" }]), faqJsonLd(faq)]}
    />
  );
}
