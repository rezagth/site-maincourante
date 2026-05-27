import { SeoLandingPage } from "../_components/seo-landing";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "../../lib/seo";

const faq = [
  {
    question: "Que se passe-t-il après la demande de démo ?",
    answer:
      "L'équipe NORYX reprend le besoin, qualifie le contexte hospitalier et prépare une démonstration centrée sur vos usages.",
  },
  {
    question: "La démo couvre-t-elle les quatre portails ?",
    answer:
      "Oui. La démonstration peut parcourir les interfaces agent, chef d'équipe, hôpital et administration.",
  },
  {
    question: "Puis-je venir avec des contraintes de sécurité ou d'audit ?",
    answer:
      "Oui. La démo est l'occasion de vérifier la compatibilité avec vos exigences de conformité et de pilotage.",
  },
];

export const metadata = buildMetadata({
  title: "Demander une démo | NORYX",
  description:
    "Planifiez une démonstration d'NORYX pour découvrir la traçabilité, la supervision et la crédibilité enterprise du produit.",
  canonicalPath: "/demo",
  keywords: ["demander une démo", "NORYX", "plateforme hospitalière"],
});

export default function DemoPage() {
  return (
    <SeoLandingPage
      title="Planifiez une démonstration NORYX"
      description="Une démo centrée sur vos opérations hospitalières permet de qualifier le besoin, montrer la valeur et accélérer la décision."
      canonicalPath="/demo"
      keywordLabel="Demander une démo"
      intro="La page de démo est volontairement directe: elle rassure, explique l'intérêt métier et conduit vers un échange qualifié avec l'équipe."
      highlights={["Qualification", "Démo", "Échange", "Valeur métier"]}
      proofPoints={[
        { label: "Durée", value: "15-30 min" },
        { label: "Objectif", value: "Décision" },
        { label: "Livrable", value: "Vision claire" },
      ]}
      sections={[
        {
          eyebrow: "Avant la démo",
          title: "Comprendre votre contexte hospitalier",
          description:
            "Nous récupérons les éléments utiles pour adapter le parcours: établissement, taille, enjeux opérationnels et objectifs.",
          bullets: ["Contexte métier", "Enjeux priorisés", "Questions clés"],
        },
        {
          eyebrow: "Pendant la démo",
          title: "Montrer les écrans qui comptent vraiment",
          description:
            "La démonstration montre l'expérience terrain, le pilotage, les rapports et les éléments de confiance attendus par un hôpital.",
          bullets: ["Parcours ciblé", "Preuve produit", "Pilotage lisible"],
        },
        {
          eyebrow: "Après la démo",
          title: "Accélérer le passage à l'étape suivante",
          description:
            "Le but est de transformer une visite en opportunité commerciale qualifiée, pas en simple prise de contact.",
          bullets: ["Suivi rapide", "Qualification", "Avancée commerciale"],
        },
      ]}
      faq={faq}
      relatedLinks={[
        { label: "Voir la plateforme", href: "/platform", description: "Parcourir l'aperçu produit." },
        { label: "Contact", href: "/contact", description: "Écrire à l'équipe NORYX." },
        { label: "Accueil", href: "/", description: "Revenir sur la page principale." },
      ]}
      ctaPrimaryLabel="Demander une démo"
      ctaPrimaryHref="/contact"
      ctaSecondaryLabel="Voir la plateforme"
      ctaSecondaryHref="/platform"
      structuredData={[breadcrumbJsonLd([{ label: "Accueil", href: "/" }, { label: "Demander une démo", href: "/demo" }]), faqJsonLd(faq)]}
    />
  );
}
