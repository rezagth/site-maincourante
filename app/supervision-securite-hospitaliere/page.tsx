import { SeoLandingPage } from "../_components/seo-landing";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "../../lib/seo";

const faq = [
  {
    question: "Que recouvre la supervision de sécurité hospitalière ?",
    answer:
      "Elle couvre la lecture en temps réel des incidents, des rondes, des alertes et des opérations critiques pour aider les responsables à prioriser.",
  },
  {
    question: "NORYX aide-t-il à coordonner le terrain ?",
    answer:
      "Oui. La plateforme donne une vision partagée entre agents, chefs d'équipe et hospitaliers pour mieux coordonner les actions.",
  },
  {
    question: "Le contenu est-il adapté au référencement IA ?",
    answer:
      "Oui. Les réponses sont explicites, structurées et riches en contexte métier pour être facilement extraites par les moteurs génératifs.",
  },
];

export const metadata = buildMetadata({
  title: "Supervision sécurité hospitalière | NORYX",
  description:
    "Plateforme de supervision sécurité hospitalière pour visualiser les incidents, coordonner les équipes et consolider le pilotage en temps réel.",
  canonicalPath: "/supervision-securite-hospitaliere",
  keywords: ["supervision sécurité hospitalière", "plateforme supervision hospitalière", "NORYX"],
});

export default function Page() {
  return (
    <SeoLandingPage
      title="Supervision sécurité hospitalière en temps réel"
      description="NORYX offre aux équipes hospitalières une lecture claire de l'activité de sécurité, des incidents et des priorités opérationnelles."
      canonicalPath="/supervision-securite-hospitaliere"
      keywordLabel="Supervision sécurité hospitalière"
      intro="Cette page répond aux requêtes d'experts et de décideurs qui veulent une supervision plus rapide, plus lisible et plus crédible qu'une solution basique."
      highlights={["Temps réel", "Coordination", "Priorisation", "Pilotage"]}
      proofPoints={[
        { label: "Angle", value: "Sécurité" },
        { label: "Support", value: "Terrain + direction" },
        { label: "Objectif", value: "Mieux décider" },
      ]}
      sections={[
        {
          eyebrow: "Visibilité",
          title: "Voir les opérations sans surcharge visuelle",
          description:
            "L'interface garde l'information lisible pour que les responsables puissent détecter rapidement ce qui demande une action.",
          bullets: ["Lecture immédiate", "Alertes claires", "Hiérarchie visuelle"],
        },
        {
          eyebrow: "Coordination",
          title: "Faire circuler l'information entre les rôles",
          description:
            "L'outil permet aux agents, superviseurs et administrateurs de travailler dans un même cadre de suivi.",
          bullets: ["Rôles distincts", "Partage du contexte", "Suivi continu"],
        },
        {
          eyebrow: "Crédibilité",
          title: "Une base solide pour un projet hospitalier sérieux",
          description:
            "Le discours, le design et les métadonnées sont construits pour inspirer confiance et favoriser la prise de rendez-vous.",
          bullets: ["Enterprise ready", "Design sobre", "CTA démonstration"],
        },
      ]}
      faq={faq}
      relatedLinks={[
        { label: "Logiciel sécurité hospitalière", href: "/logiciel-securite-hospitaliere", description: "Page orientée sécurité et conformité." },
        { label: "Plateforme opérations hospitalières", href: "/plateforme-operations-hospitalieres", description: "Voir le centre de contrôle global." },
        { label: "Demander une démo", href: "/demo", description: "Planifier un échange avec l'équipe." },
      ]}
      ctaPrimaryLabel="Demander une démo"
      ctaPrimaryHref="/demo"
      ctaSecondaryLabel="Voir la plateforme"
      ctaSecondaryHref="/platform"
      structuredData={[breadcrumbJsonLd([{ label: "Accueil", href: "/" }, { label: "Supervision sécurité hospitalière", href: "/supervision-securite-hospitaliere" }]), faqJsonLd(faq)]}
    />
  );
}
