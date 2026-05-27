import { SeoLandingPage } from "../_components/seo-landing";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "../../lib/seo";

const faq = [
  {
    question: "Que présente la page plateforme ?",
    answer:
      "Elle montre la logique générale du produit, les portails, les usages et les bénéfices opérationnels pour les hôpitaux.",
  },
  {
    question: "Cette page aide-t-elle au SEO ?",
    answer:
      "Oui. Elle crée un point d'entrée interne cohérent pour les visiteurs et renforce l'architecture du site.",
  },
  {
    question: "Peut-on y retrouver le positionnement OPERIA ?",
    answer:
      "Oui. Elle rappelle qu'OPERIA est un centre de contrôle digital des opérations hospitalières, pas un simple registre.",
  },
];

export const metadata = buildMetadata({
  title: "Plateforme | OPERIA",
  description:
    "Aperçu de la plateforme OPERIA: supervision en temps réel, traçabilité, portails utilisateurs et dashboards hospitaliers.",
  canonicalPath: "/platform",
  keywords: ["plateforme OPERIA", "dashboard hospitalier", "supervision temps réel"],
});

export default function PlatformPage() {
  return (
    <SeoLandingPage
      title="Aperçu de la plateforme OPERIA"
      description="La page plateforme résume l'expérience produit: quatre portails, un dashboard clair et une logique de supervision adaptée aux hôpitaux."
      canonicalPath="/platform"
      keywordLabel="Plateforme"
      intro="Ce point d'entrée donne une lecture rapide de la proposition de valeur et renforce la cohérence entre la home, la démo et les pages SEO ciblées."
      highlights={["Dashboard", "Portails", "Supervision", "Rapports"]}
      proofPoints={[
        { label: "Vue", value: "Centrale" },
        { label: "Rôles", value: "4 portails" },
        { label: "Usage", value: "Hospitalier" },
      ]}
      sections={[
        {
          eyebrow: "Produit",
          title: "Un aperçu de la structure OPERIA",
          description:
            "Les visiteurs comprennent rapidement comment la plateforme organise les rôles, les événements et les rapports.",
          bullets: ["Structure claire", "Lecture rapide", "Orientation terrain"],
        },
        {
          eyebrow: "Enterprise",
          title: "Un site qui semble déjà prêt pour les acheteurs hospitaliers",
          description:
            "Le design, le vocabulaire et les CTA sont calibrés pour des cycles de vente crédibles et sérieux.",
          bullets: ["Sobriété", "Crédibilité", "Conversion"],
        },
        {
          eyebrow: "Navigation",
          title: "Une base interne utile pour la SEO et la conversion",
          description:
            "La page soutient la navigation, renforce les ancres sémantiques et aide les moteurs à comprendre le produit.",
          bullets: ["Maillage interne", "Sémantique forte", "Clarté"],
        },
      ]}
      faq={faq}
      relatedLinks={[
        { label: "Demander une démo", href: "/demo", description: "Passer à la prise de rendez-vous." },
        { label: "Main courante électronique hôpital", href: "/main-courante-electronique-hopital", description: "Voir le mot-clé le plus recherché." },
        { label: "Accueil", href: "/", description: "Retour à la home." },
      ]}
      ctaPrimaryLabel="Demander une démo"
      ctaPrimaryHref="/demo"
      ctaSecondaryLabel="Contact"
      ctaSecondaryHref="/contact"
      structuredData={[breadcrumbJsonLd([{ label: "Accueil", href: "/" }, { label: "Plateforme", href: "/platform" }]), faqJsonLd(faq)]}
    />
  );
}
