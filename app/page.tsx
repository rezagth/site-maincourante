import { buildMetadata, breadcrumbJsonLd, faqJsonLd, serviceJsonLd, siteDescription, websiteJsonLd } from "../lib/seo";
import HomeContent from "./_components/HomeContent";

const faq = [
  { question: "NORYX est-il une main courante électronique ?", answer: "NORYX couvre la main courante électronique, mais va plus loin: la plateforme structure la traçabilité, supervise les opérations en temps réel et consolide les données pour le pilotage hospitalier." },
  { question: "À qui s'adresse la plateforme ?", answer: "NORYX s'adresse aux agents, aux chefs d'équipe, aux responsables sécurité et aux directions d'hôpital qui ont besoin d'un centre de contrôle opérationnel lisible et auditable." },
  { question: "La solution fonctionne-t-elle en mobilité ?", answer: "Oui. L'interface est pensée mobile-first pour les équipes de terrain, avec un mode offline pour continuer la saisie lorsque la connexion est instable." },
  { question: "La plateforme aide-t-elle les contrôles et audits ?", answer: "Oui. Les événements sont horodatés, historisés et consultables. Les rapports permettent de retrouver rapidement la séquence des faits et les points d'action." },
  { question: "NORYX remplace-t-il les outils de supervision existants ?", answer: "NORYX remplace surtout les flux dispersés, la saisie papier et les suivis non consolidés en apportant un point d'entrée unique pour la traçabilité hospitalière." },
  { question: "Comment la plateforme améliore-t-elle la conversion des démos ?", answer: "En montrant immédiatement la valeur métier: moins d'erreurs, plus de visibilité temps réel, des rapports exploitables et un discours adapté aux hôpitaux." },
];

export const metadata = buildMetadata({
  title: "NORYX — Supervision hospitalière temps réel",
  description: siteDescription,
  canonicalPath: "/",
  keywords: [
    "NORYX",
    "supervision hospitalière",
    "traçabilité des opérations hospitalières",
    "main courante électronique hôpital",
    "logiciel sécurité hospitalière",
    "plateforme opérations hospitalières",
    "registre digital hôpital",
  ],
});

export default function Home() {
  const structuredData = [
    websiteJsonLd(),
    serviceJsonLd("Plateforme de traçabilité et de supervision hospitalière", siteDescription, "/"),
    breadcrumbJsonLd([{ label: "Accueil", href: "/" }]),
    faqJsonLd(faq),
  ];

  return <HomeContent structuredData={structuredData} />;
}
