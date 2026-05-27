import Link from "next/link";
import { siteName } from "../../lib/seo";

type SeoSection = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

type SeoFaq = {
  question: string;
  answer: string;
};

type RelatedLink = {
  label: string;
  href: string;
  description: string;
};

type SeoLandingPageProps = {
  title: string;
  description: string;
  canonicalPath: string;
  keywordLabel: string;
  intro: string;
  highlights: string[];
  proofPoints: Array<{ label: string; value: string }>;
  sections: SeoSection[];
  faq: SeoFaq[];
  relatedLinks: RelatedLink[];
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
  structuredData?: Array<Record<string, unknown>>;
};

export function SeoLandingPage({
  title,
  description,
  canonicalPath,
  keywordLabel,
  intro,
  highlights,
  proofPoints,
  sections,
  faq,
  relatedLinks,
  ctaPrimaryLabel,
  ctaPrimaryHref,
  ctaSecondaryLabel,
  ctaSecondaryHref,
  structuredData = [],
}: SeoLandingPageProps) {
  return (
    <div className="noryx-shell seo-page">
      <header className="topbar seo-topbar">
        <Link href="/" className="brand" aria-label={`${siteName} accueil`}>
          <span className="brand-mark">C</span>
          <span>
            <strong>{siteName}</strong>
            <small>Supervision hospitalière temps réel</small>
          </span>
        </Link>
        <div className="topbar-actions">
          <a href={ctaSecondaryHref} className="ghost-link">{ctaSecondaryLabel}</a>
          <a href={ctaPrimaryHref} className="primary-link">{ctaPrimaryLabel}</a>
        </div>
      </header>

      <main>
        <section className="seo-hero" id="hero">
          <div className="seo-hero-copy">
            <span className="eyebrow">{keywordLabel}</span>
            <h1>{title}</h1>
            <p className="seo-intro">{description}</p>
            <p className="seo-body">{intro}</p>
            <div className="hero-actions">
              <a href={ctaPrimaryHref} className="primary-link">{ctaPrimaryLabel}</a>
              <a href={ctaSecondaryHref} className="ghost-link">{ctaSecondaryLabel}</a>
            </div>
            <div className="hero-meta">
              {highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <aside className="seo-proof-card" aria-label="Repères produit">
            <div className="seo-proof-header">
              <span>NORYX</span>
              <small>{canonicalPath}</small>
            </div>
            <div className="seo-proof-grid">
              {proofPoints.map((point) => (
                <article key={point.label} className="seo-proof-point">
                  <span>{point.label}</span>
                  <strong>{point.value}</strong>
                </article>
              ))}
            </div>
            <div className="seo-proof-note">
              Plateforme conçue pour les établissements qui veulent centraliser la traçabilité, réduire les écarts et accélérer la supervision.
            </div>
          </aside>
        </section>

        <section className="section-block alt">
          <div className="section-head compact">
            <span className="section-kicker">Définition claire</span>
            <h2>Comprendre le rôle opérationnel d'NORYX</h2>
            <p>
              Le site est rédigé pour les équipes hospitalières, les responsables sécurité et les décideurs qui recherchent une réponse nette et exploitable par les moteurs IA.
            </p>
          </div>
          <div className="solution-grid">
            {sections.map((section) => (
              <article key={section.title} className="seo-info-card">
                <span className="section-kicker">{section.eyebrow}</span>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <div className="section-head compact">
            <span className="section-kicker">FAQ SEO</span>
            <h2>Réponses directes pour les équipes et les moteurs IA</h2>
          </div>
          <div className="faq-grid">
            {faq.map((item) => (
              <details key={item.question} className="faq-card">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section-block alt">
          <div className="section-head compact">
            <span className="section-kicker">Ressources liées</span>
            <h2>Approfondir le sujet sans perdre le contexte métier</h2>
          </div>
          <div className="related-grid">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="related-card">
                <strong>{link.label}</strong>
                <p>{link.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="section-block cta-block">
          <div className="cta-card">
            <span className="section-kicker">Conversion</span>
            <h2>Planifiez une démonstration et voyez NORYX appliqué à votre organisation</h2>
            <p>
              Une démo permet de cadrer les rôles, la traçabilité, les rapports et les besoins de supervision avant toute phase de déploiement.
            </p>
            <div className="hero-actions center">
              <a href={ctaPrimaryHref} className="primary-link">{ctaPrimaryLabel}</a>
              <a href={ctaSecondaryHref} className="ghost-link">{ctaSecondaryLabel}</a>
            </div>
          </div>
        </section>
      </main>

      {structuredData.map((entry, index) => (
        <script
          key={`${canonicalPath}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </div>
  );
}
