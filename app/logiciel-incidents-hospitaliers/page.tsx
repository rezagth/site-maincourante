import { SeoLandingPage } from "../_components/seo-landing";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "../../lib/seo";

const faq = [
  {
    question: "À quoi sert un logiciel d'incidents hospitaliers ?",
    answer:
      "Il sert à consigner, suivre et consolider les incidents pour mieux coordonner les équipes et alimenter l'audit.",
  },
  {
    question: "NORYX est-il adapté aux incidents critiques ?",
    answer:
      "Oui. Le produit est positionné pour les opérations hospitalières critiques et la supervision temps réel.",
  },
  {
    question: "Peut-on l'utiliser sur mobile ?",
    answer:
      "Oui. L'expérience mobile est pensée pour la saisie rapide sur le terrain et le suivi des alertes.",
  },
];

export const metadata = buildMetadata({
  title: "Logiciel incidents hospitaliers | NORYX",
  description:
    "Logiciel incidents hospitaliers pour suivre les événements, coordonner les équipes et fiabiliser la traçabilité en temps réel.",
  canonicalPath: "/logiciel-incidents-hospitaliers",
  keywords: ["logiciel incidents hospitaliers", "suivi incidents hôpital", "NORYX"],
});

export default function Page() {
  return (
    <SeoLandingPage
      title="Le logiciel pour suivre les incidents hospitaliers sans perdre le contexte"
      description="NORYX structure les incidents hospitaliers dans une interface claire, rapide et exploitable par les équipes terrain comme par la direction."
      canonicalPath="/logiciel-incidents-hospitaliers"
      keywordLabel="Logiciel incidents hospitaliers"
      intro="Cette page cible les requêtes liées au traitement des incidents hospitaliers, avec un discours métier simple et directement orienté démonstration."
      highlights={["Incidents", "Suivi", "Mobile", "Audit"]}
      proofPoints={[
        { label: "Traitement", value: "Structuré" },
        { label: "Lecture", value: "Centralisée" },
        { label: "Objectif", value: "Réactivité" },
      ]}
      sections={[
        {
          eyebrow: "Incident",
          title: "Consigner un événement sans ralentir le terrain",
          description:
            "Le produit doit rester rapide à utiliser, même dans des contextes d'urgence ou de mouvement.",
          bullets: ["Saisie rapide", "Contexte conservé", "Horodatage automatique"],
        },
        {
          eyebrow: "Suivi",
          title: "Gardez la main sur les actions de traitement",
          description:
            "NORYX permet de voir l'état d'un incident et de suivre le passage d'un responsable à l'autre.",
          bullets: ["Statut visible", "Responsables identifiés", "Actions tracées"],
        },
        {
          eyebrow: "Vente",
          title: "Relier immédiatement le besoin à la démo",
          description:
            "La page sert à convertir: elle explique le problème, la valeur et l'usage sans jargon inutile.",
          bullets: ["Positionnement clair", "CTA visible", "Bénéfice explicite"],
        },
      ]}
      faq={faq}
      relatedLinks={[
        { label: "Traçabilité incidents hôpital", href: "/tracabilite-incidents-hopital", description: "Voir la page dédiée à la traçabilité." },
        { label: "Logiciel sécurité hospitalière", href: "/logiciel-securite-hospitaliere", description: "Comprendre le positionnement sécurité." },
        { label: "Demander une démo", href: "/demo", description: "Réserver une présentation." },
      ]}
      ctaPrimaryLabel="Demander une démo"
      ctaPrimaryHref="/demo"
      ctaSecondaryLabel="Voir la plateforme"
      ctaSecondaryHref="/platform"
      structuredData={[breadcrumbJsonLd([{ label: "Accueil", href: "/" }, { label: "Logiciel incidents hospitaliers", href: "/logiciel-incidents-hospitaliers" }]), faqJsonLd(faq)]}
    />
  );
}
