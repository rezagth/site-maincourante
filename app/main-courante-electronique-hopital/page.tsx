import { SeoLandingPage } from "../_components/seo-landing";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "../../lib/seo";

const faq = [
  {
    question: "Qu'est-ce qu'une main courante électronique pour un hôpital ?",
    answer:
      "C'est un registre digital qui structure les événements, les rondes, les incidents et les actions de suivi dans un format lisible, horodaté et auditable.",
  },
  {
    question: "Pourquoi la version digitale est-elle plus efficace que le papier ?",
    answer:
      "Parce qu'elle réduit les pertes d'information, accélère la transmission, améliore la supervision et simplifie la revue des faits.",
  },
  {
    question: "NORYX remplace-t-il uniquement le registre ?",
    answer:
      "Non. NORYX centralise aussi la supervision en temps réel, le reporting et la lecture opérationnelle pour les établissements hospitaliers.",
  },
];

export const metadata = buildMetadata({
  title: "Main courante électronique hôpital | NORYX",
  description:
    "Découvrez NORYX, la main courante électronique pour hôpital qui centralise la traçabilité, les incidents et la supervision opérationnelle en temps réel.",
  canonicalPath: "/main-courante-electronique-hopital",
  keywords: [
    "main courante électronique hôpital",
    "registre digital hôpital",
    "traçabilité hospitalière",
    "NORYX",
  ],
});

export default function Page() {
  return (
    <SeoLandingPage
      title="La main courante électronique pensée pour l'hôpital"
      description="NORYX remplace la main courante papier par un registre digital structuré pour la supervision, la traçabilité et le reporting hospitalier."
      canonicalPath="/main-courante-electronique-hopital"
      keywordLabel="Main courante électronique hôpital"
      intro="Le site présente une réponse claire pour les directions hospitalières: une main courante digitale qui conserve le contexte métier, facilite les contrôles et permet un pilotage temps réel des opérations critiques."
      highlights={["Registre digital", "Temps réel", "Auditable", "Mobile-first"]}
      proofPoints={[
        { label: "Usage", value: "Terrain + direction" },
        { label: "Lecture", value: "En quelques secondes" },
        { label: "Bénéfice", value: "Moins d'écarts" },
      ]}
      sections={[
        {
          eyebrow: "Définition",
          title: "Un registre numérique qui structure les faits",
          description:
            "La main courante électronique permet de consigner les événements avec un format stable, lisible et exploitable sans retraitement manuel.",
          bullets: ["Horodatage automatique", "Saisie guidée", "Consultation rapide"],
        },
        {
          eyebrow: "Valeur métier",
          title: "Une meilleure continuité entre terrain et supervision",
          description:
            "Les agents saisissent vite, les chefs d'équipe suivent le traitement, et l'hôpital récupère une vision consolidée.",
          bullets: ["Transmission rapide", "Visibilité partagée", "Historique exploitable"],
        },
        {
          eyebrow: "Conversion",
          title: "Un discours plus crédible pour la démonstration",
          description:
            "Le terme est familier, mais la proposition va plus loin: NORYX devient le centre de contrôle digital des opérations hospitalières.",
          bullets: ["Positionnement enterprise", "Preuve immédiate", "Vision hospitalière"],
        },
      ]}
      faq={faq}
      relatedLinks={[
        { label: "Logiciel incidents hospitaliers", href: "/logiciel-incidents-hospitaliers", description: "Voir comment NORYX structure le suivi des événements hospitaliers." },
        { label: "Plateforme opérations hospitalières", href: "/plateforme-operations-hospitalieres", description: "Comprendre le rôle de centre de contrôle digital." },
        { label: "Demander une démo", href: "/demo", description: "Planifier une démonstration avec vos équipes." },
      ]}
      ctaPrimaryLabel="Demander une démo"
      ctaPrimaryHref="/demo"
      ctaSecondaryLabel="Voir la plateforme"
      ctaSecondaryHref="/platform"
      structuredData={[breadcrumbJsonLd([{ label: "Accueil", href: "/" }, { label: "Main courante électronique hôpital", href: "/main-courante-electronique-hopital" }]), faqJsonLd(faq)]}
    />
  );
}
