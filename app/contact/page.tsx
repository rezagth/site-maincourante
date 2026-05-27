import { SeoLandingPage } from "../_components/seo-landing";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "../../lib/seo";

const faq = [
  {
    question: "Quel est le meilleur moyen de contacter OPERIA ?",
    answer:
      "Le plus simple est d'écrire à l'équipe ou de passer par la page démo pour accélérer le traitement de votre demande.",
  },
  {
    question: "Peut-on détailler un besoin hôpital dans le message ?",
    answer:
      "Oui. Plus le contexte est clair, plus la réponse sera utile: type d'établissement, usage visé et calendrier projet.",
  },
  {
    question: "Pourquoi cette page reste importante pour la conversion ?",
    answer:
      "Parce qu'elle capture les contacts à forte intention sans diluer le message produit.",
  },
];

export const metadata = buildMetadata({
  title: "Contact | OPERIA",
  description:
    "Contactez l'équipe OPERIA pour échanger sur vos besoins de supervision hospitalière, de traçabilité et de démonstration produit.",
  canonicalPath: "/contact",
  keywords: ["contact OPERIA", "démo hospitalière", "supervision hospitalière"],
});

export default function ContactPage() {
  return (
    <SeoLandingPage
      title="Contactez OPERIA pour un échange qualifié"
      description="La page de contact sert à transformer une intention en opportunité concrète, avec un message clair et adapté à l'hôpital."
      canonicalPath="/contact"
      keywordLabel="Contact"
      intro="L'expérience de contact reste cohérente avec le reste du site: sobre, directe et orientée vers la prise de rendez-vous ou la demande de démonstration."
      highlights={["Réponse rapide", "Échange qualifié", "Hôpital", "B2B"]}
      proofPoints={[
        { label: "Canal", value: "Email / démo" },
        { label: "Cible", value: "Décideurs" },
        { label: "Objectif", value: "Rendez-vous" },
      ]}
      sections={[
        {
          eyebrow: "Message",
          title: "Formuler le besoin avec le bon niveau de contexte",
          description:
            "Décrire l'établissement, les usages et les enjeux permet à l'équipe de répondre plus vite et plus justement.",
          bullets: ["Contexte précis", "Usage visé", "Calendrier souhaité"],
        },
        {
          eyebrow: "Pipeline",
          title: "Conserver la cohérence avec le site de conversion",
          description:
            "La page continue d'orienter vers la démo, la plateforme et les contenus SEO stratégiques.",
          bullets: ["CTA visibles", "Message cohérent", "Navigation simple"],
        },
        {
          eyebrow: "Crédibilité",
          title: "Un point d'entrée rassurant pour un SaaS enterprise",
          description:
            "Le ton reste professionnel, sobre et crédible pour des hôpitaux et des organisations exigeantes.",
          bullets: ["Ton premium", "Confiance", "Orientation vente"],
        },
      ]}
      faq={faq}
      relatedLinks={[
        { label: "Demander une démo", href: "/demo", description: "Passer directement à la prise de rendez-vous." },
        { label: "Voir la plateforme", href: "/platform", description: "Parcourir l'aperçu produit." },
        { label: "Accueil", href: "/", description: "Revenir à la page principale." },
      ]}
      ctaPrimaryLabel="Demander une démo"
      ctaPrimaryHref="/demo"
      ctaSecondaryLabel="Voir la plateforme"
      ctaSecondaryHref="/platform"
      structuredData={[breadcrumbJsonLd([{ label: "Accueil", href: "/" }, { label: "Contact", href: "/contact" }]), faqJsonLd(faq)]}
    />
  );
}

