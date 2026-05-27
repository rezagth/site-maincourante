import { SeoLandingPage } from "../../_components/seo-landing";
import { articleJsonLd, breadcrumbJsonLd, buildMetadata, faqJsonLd } from "../../../lib/seo";

const faq = [
  {
    question: "Quels critères regarder pour choisir un logiciel de sécurité hospitalière ?",
    answer:
      "Il faut regarder la traçabilité, la lisibilité du dashboard, la vitesse de saisie, le mode mobile, le contrôle des rôles et la qualité du reporting.",
  },
  {
    question: "Faut-il privilégier un outil simple ou complet ?",
    answer:
      "Le bon logiciel doit rester simple pour le terrain tout en couvrant le pilotage, l'audit et la supervision de la direction.",
  },
  {
    question: "OPERIA correspond-il à un usage enterprise ?",
    answer:
      "Oui. Le positionnement est conçu pour les établissements hospitaliers qui recherchent crédibilité, contrôle et déploiement structuré.",
  },
];

export const metadata = buildMetadata({
  title: "Choisir un logiciel de sécurité hospitalière | OPERIA",
  description:
    "Guide pour choisir un logiciel de sécurité hospitalière: critères, pièges à éviter et bonnes pratiques pour une démo crédible.",
  canonicalPath: "/guides/choisir-logiciel-securite-hospitaliere",
  keywords: [
    "choisir logiciel sécurité hospitalière",
    "logiciel sécurité hospitalière",
    "démo hôpital",
  ],
});

export default function Page() {
  return (
    <SeoLandingPage
      title="Comment choisir un logiciel de sécurité hospitalière"
      description="Ce guide aide les hôpitaux à sélectionner une solution sérieuse pour la supervision, la traçabilité et la gestion des opérations critiques."
      canonicalPath="/guides/choisir-logiciel-securite-hospitaliere"
      keywordLabel="Choix logiciel"
      intro="Le but n'est pas seulement de comparer des fonctionnalités: il faut vérifier la capacité du produit à s'intégrer dans un environnement hospitalier réel."
      highlights={["Critères", "Conformité", "Mobile", "Reporting"]}
      proofPoints={[
        { label: "But", value: "Choix éclairé" },
        { label: "Public", value: "Décideurs" },
        { label: "Focus", value: "Sécurité" },
      ]}
      sections={[
        {
          eyebrow: "Critères",
          title: "La lisibilité et la vitesse priment sur la complexité",
          description:
            "Un bon logiciel de sécurité doit permettre aux équipes d'agir vite sans perdre le contexte métier.",
          bullets: ["Saisie rapide", "Dashboard lisible", "Support terrain"],
        },
        {
          eyebrow: "Enterprise",
          title: "L'outil doit rassurer une direction hospitalière",
          description:
            "La crédibilité se construit avec du reporting, des rôles clairs, une structure documentaire et un discours précis.",
          bullets: ["Audit", "Rôles", "Supervision"],
        },
        {
          eyebrow: "Démo",
          title: "La démonstration doit être orientée usage réel",
          description:
            "La page répond aussi à l'intention de conversion: elle aide à qualifier une démo utile plutôt qu'un simple tour d'écran.",
          bullets: ["Cas d'usage", "Preuve produit", "Décision plus rapide"],
        },
      ]}
      faq={faq}
      relatedLinks={[
        { label: "Logiciel sécurité hospitalière", href: "/logiciel-securite-hospitaliere", description: "Revenir à la page mot-clé principale." },
        { label: "Supervision sécurité hospitalière", href: "/supervision-securite-hospitaliere", description: "Lire la page sur la supervision." },
        { label: "Ressources", href: "/ressources", description: "Retour au hub éditorial." },
      ]}
      ctaPrimaryLabel="Demander une démo"
      ctaPrimaryHref="/demo"
      ctaSecondaryLabel="Voir la plateforme"
      ctaSecondaryHref="/platform"
      structuredData={[
        breadcrumbJsonLd([
          { label: "Accueil", href: "/" },
          { label: "Ressources", href: "/ressources" },
          { label: "Choisir un logiciel de sécurité hospitalière", href: "/guides/choisir-logiciel-securite-hospitaliere" },
        ]),
        articleJsonLd({
          headline: "Comment choisir un logiciel de sécurité hospitalière",
          description:
            "Guide pour choisir un logiciel de sécurité hospitalière: critères, pièges à éviter et bonnes pratiques pour une démo crédible.",
          path: "/guides/choisir-logiciel-securite-hospitaliere",
        }),
        faqJsonLd(faq),
      ]}
    />
  );
}
