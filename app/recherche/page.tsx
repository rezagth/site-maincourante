import Link from "next/link";
import { buildMetadata, siteName } from "../../lib/seo";

export const metadata = {
  ...buildMetadata({
    title: `Recherche | ${siteName}`,
    description: "Recherche interne OPERIA pour retrouver rapidement les pages hospitalières clés.",
    canonicalPath: "/recherche",
    keywords: ["recherche OPERIA", "site search", "hospitalier"],
  }),
  robots: {
    index: false,
    follow: false,
  },
};

const pages = [
  ["Accueil", "/"],
  ["Plateforme", "/platform"],
  ["Demander une démo", "/demo"],
  ["Ressources", "/ressources"],
  ["Main courante électronique hôpital", "/main-courante-electronique-hopital"],
  ["Logiciel sécurité hospitalière", "/logiciel-securite-hospitaliere"],
  ["Traçabilité incidents hôpital", "/tracabilite-incidents-hopital"],
  ["Supervision sécurité hospitalière", "/supervision-securite-hospitaliere"],
  ["Plateforme opérations hospitalières", "/plateforme-operations-hospitalieres"],
  ["Guide papier vs digitale", "/guides/comparatif-main-courante-papier-digitale"],
  ["Choisir un logiciel de sécurité hospitalière", "/guides/choisir-logiciel-securite-hospitaliere"],
  ["Plateforme de supervision hospitalière", "/guides/plateforme-supervision-hospitaliere"],
] as const;

export default function SearchPage() {
  return (
    <div className="operia-shell seo-page">
      <main>
        <section className="section-block">
          <div className="section-head">
            <span className="section-kicker">Recherche interne</span>
            <h1>Recherche OPERIA</h1>
            <p>Accès direct aux pages les plus utiles du site.</p>
          </div>
          <div className="related-grid">
            {pages.map(([label, href]) => (
              <Link key={href} href={href} className="related-card">
                <strong>{label}</strong>
                <p>Ouvrir la page.</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
