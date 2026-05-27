import { SeoLandingPage } from "../../_components/seo-landing";
import { articleJsonLd, breadcrumbJsonLd, buildMetadata, faqJsonLd } from "../../../lib/seo";

const faq = [
  {
    question: "Pourquoi comparer papier et digital ?",
    answer:
      "Parce que les équipes hospitalières veulent comprendre rapidement ce que le digital apporte en traçabilité, en vitesse et en audit.",
  },
  {
    question: "Le papier est-il encore adapté à un usage critique ?",
    answer:
      "Il peut convenir dans des contextes très simples, mais il devient vite limité dès qu'il faut consolider, rechercher ou auditer à grande échelle.",
  },
  {
    question: "OPERIA remplace-t-il le papier sans complexifier ?",
    answer:
      "Oui. La plateforme remplace les saisies dispersées par un flux unique plus lisible pour les équipes et les directions.",
  },
];

export const metadata = buildMetadata({
  title: "Comparatif main courante papier vs digitale | OPERIA",
  description:
    "Comparatif détaillé entre main courante papier et digitale pour les hôpitaux: traçabilité, audit, supervision et pilotage opérationnel.",
  canonicalPath: "/guides/comparatif-main-courante-papier-digitale",
  keywords: [
    "comparatif main courante papier vs digitale",
    "main courante digitale hôpital",
    "traçabilité hospitalière",
  ],
});

export default function Page() {
  return (
    <SeoLandingPage
      title="Comparatif entre main courante papier et main courante digitale"
      description="Ce guide explique ce que le passage au digital change pour la traçabilité, la supervision, l'audit et la qualité des opérations hospitalières."
      canonicalPath="/guides/comparatif-main-courante-papier-digitale"
      keywordLabel="Comparatif"
      intro="La comparaison est pensée pour les équipes hospitalières qui évaluent un passage du papier vers une solution digitale plus fiable et plus simple à exploiter."
      highlights={["Papier vs digital", "Audit", "Lisibilité", "Temps réel"]}
      proofPoints={[
        { label: "Angle", value: "Décision" },
        { label: "Lecture", value: "Rapide" },
        { label: "But", value: "Choisir mieux" },
      ]}
      sections={[
        {
          eyebrow: "Différences",
          title: "Le papier documente, le digital structure",
          description:
            "Le digital apporte une organisation des données qui facilite la recherche, la consolidation et la relecture.",
          bullets: ["Historique exploitable", "Recherche rapide", "Contexte conservé"],
        },
        {
          eyebrow: "Opérations",
          title: "Le digital accélère les flux entre terrain et supervision",
          description:
            "Les équipes ne gagnent pas seulement du temps de saisie: elles gagnent du temps de coordination et de traitement.",
          bullets: ["Priorités visibles", "Transmission rapide", "Moins d'erreurs"],
        },
        {
          eyebrow: "Conformité",
          title: "La traçabilité devient vraiment auditable",
          description:
            "Les modifications, les statuts et les horodatages permettent une lecture plus sérieuse qu'un support papier isolé.",
          bullets: ["Horodatage natif", "Journal d'audit", "Accès par rôle"],
        },
      ]}
      faq={faq}
      relatedLinks={[
        { label: "Main courante électronique hôpital", href: "/main-courante-electronique-hopital", description: "Lire la version mot-clé principale." },
        { label: "Registre digital hôpital", href: "/registre-digital-hopital", description: "Voir le registre digital appliqué à l'hôpital." },
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
          { label: "Comparatif main courante papier vs digitale", href: "/guides/comparatif-main-courante-papier-digitale" },
        ]),
        articleJsonLd({
          headline: "Comparatif main courante papier vs digitale",
          description:
            "Comparatif détaillé entre main courante papier et digitale pour les hôpitaux: traçabilité, audit, supervision et pilotage opérationnel.",
          path: "/guides/comparatif-main-courante-papier-digitale",
        }),
        faqJsonLd(faq),
      ]}
    />
  );
}
