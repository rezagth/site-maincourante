"use client";

import React, { useEffect } from "react";
import { Spotlight } from "./ui/spotlight";
import Link from "next/link";

const portals = [
  { name: "Agent", color: "#818cf8", description: "Saisie mobile rapide, mode offline et horodatage automatique au plus près du terrain.", points: ["Saisie guidée", "Fonctionne hors ligne", "Horodatage natif"] },
  { name: "Chef d'équipe", color: "#fbbf24", description: "Supervision des équipes, priorisation des alertes et validation en temps réel.", points: ["Vue équipe", "Validation rapide", "Priorités visibles"] },
  { name: "Hôpital", color: "#22d3ee", description: "KPIs consolidés, analyse des tendances et reporting exploitable par les directions.", points: ["KPIs consolidés", "Rapports PDF", "Lecture multi-sites"] },
  { name: "Operator / Admin", color: "#a78bfa", description: "Pilotage global, gestion des accès et supervision de plusieurs établissements.", points: ["Administration centralisée", "Accès contrôlés", "Vision globale"] },
];

const dashboardStats = [
  { label: "Incidents suivis", value: "14", trend: "+3 aujourd'hui", tone: "blue" },
  { label: "Entrées validées", value: "247", trend: "+18 % sur 7 jours", tone: "green" },
  { label: "Agents connectés", value: "18", trend: "sur 24 planifiés", tone: "purple" },
];

const incidents = [
  { type: "Incident", time: "09:47", title: "Accès non autorisé - Bloc C", detail: "Signalement consigné avec heure, auteur, localisation et statut de suivi.", tone: "red" },
  { type: "Ronde", time: "09:31", title: "Ronde terminée - Secteur B", detail: "14 points de contrôle validés, aucune anomalie critique détectée.", tone: "green" },
  { type: "Alerte", time: "09:15", title: "Vérification technique - Ascenseur 3", detail: "Maintenance notifiée au service concerné avec suivi de prise en charge.", tone: "amber" },
];

const trustItems = ["Sécurité des données", "Conformité", "Continuité de service", "Journal d'audit", "Pilotage multi-sites"];

const processSteps = [
  { step: "01", title: "Saisie structurée", text: "L'agent enregistre un événement ou une ronde avec des champs précis, sans friction sur mobile ou tablette." },
  { step: "02", title: "Supervision instantanée", text: "Le chef d'équipe voit la remontée, la priorise et suit le traitement en temps réel." },
  { step: "03", title: "Pilotage consolidé", text: "L'hôpital accède à des KPIs clairs, à l'historique et aux rapports pour décider plus vite." },
  { step: "04", title: "Audit exploitable", text: "Chaque action est horodatée et historisée pour fiabiliser la conformité et les contrôles." },
];

const useCases = [
  { title: "Sécurité hospitalière", text: "Centraliser les incidents, les alertes et les rondes pour réduire les délais de traitement." },
  { title: "Opérations critiques", text: "Suivre les événements sensibles dans les secteurs où la réactivité et l'audit comptent." },
  { title: "Pilotage multi-sites", text: "Comparer plusieurs établissements avec une lecture homogène et exploitable par la direction." },
  { title: "Reporting de conformité", text: "Exporter rapidement des éléments propres pour la supervision, la revue et les contrôles." },
];

const compliance = ["Journalisation des actions", "Traçabilité des modifications", "Accès par rôle", "Exports documentés", "Cohérence des horodatages", "Architecture simple à auditer"];

const faq = [
  { question: "NORYX est-il une main courante électronique ?", answer: "NORYX couvre la main courante électronique, mais va plus loin: la plateforme structure la traçabilité, supervise les opérations en temps réel et consolide les données pour le pilotage hospitalier." },
  { question: "À qui s'adresse la plateforme ?", answer: "NORYX s'adresse aux agents, aux chefs d'équipe, aux responsables sécurité et aux directions d'hôpital qui ont besoin d'un centre de contrôle opérationnel lisible et auditable." },
  { question: "La solution fonctionne-t-elle en mobilité ?", answer: "Oui. L'interface est pensée mobile-first pour les équipes de terrain, avec un mode offline pour continuer la saisie lorsque la connexion est instable." },
  { question: "La plateforme aide-t-elle les contrôles et audits ?", answer: "Oui. Les événements sont horodatés, historisés et consultables. Les rapports permettent de retrouver rapidement la séquence des faits et les points d'action." },
  { question: "NORYX remplace-t-il les outils de supervision existants ?", answer: "NORYX remplace surtout les flux dispersés, la saisie papier et les suivis non consolidés en apportant un point d'entrée unique pour la traçabilité hospitalière." },
  { question: "Comment la plateforme améliore-t-elle la conversion des démos ?", answer: "En montrant immédiatement la valeur métier: moins d'erreurs, plus de visibilité temps réel, des rapports exploitables et un discours adapté aux hôpitaux." },
];

const glossary = [
  { term: "Main courante électronique", definition: "Registre numérique structuré qui consigne les événements, les rondes, les alertes et les actions de suivi." },
  { term: "Traçabilité", definition: "Capacité à retrouver qui a fait quoi, quand, où et dans quel contexte pour faciliter le contrôle et l'audit." },
  { term: "Supervision en temps réel", definition: "Lecture immédiate de l'activité pour prioriser les événements et coordonner les équipes plus vite." },
];

const testimonials = [
  { quote: "Un centre de contrôle lisible, sans surcharge, qui donne enfin une vision consolidée des opérations critiques.", role: "Direction des opérations" },
  { quote: "Les équipes terrain gagnent en vitesse de saisie et les responsables récupèrent une information exploitable immédiatement.", role: "Chef d'équipe" },
  { quote: "Le discours est crédible pour un hôpital: traçabilité, conformité, rôles et reporting sont au centre.", role: "Responsable sécurité" },
];

export default function HomeContent({ structuredData }: { structuredData: Record<string, unknown>[] }) {
  useEffect(() => {
    const sections = document.querySelectorAll(".section-block, .hero, .footer");
    const cards = document.querySelectorAll(".portal-card, .problem-grid article, .solution-grid article, .trust-card, .process-card, .usecase-card, .glossary-card, .testimonial-card, .faq-card, .stat-card");

    const sectionObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            sectionObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const cardObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const parent = entry.target.parentElement;
            if (parent) {
              const siblings = Array.from(parent.children);
              const idx = siblings.indexOf(entry.target as Element);
              (entry.target as HTMLElement).style.transitionDelay = `${idx * 80}ms`;
            }
            entry.target.classList.add("revealed");
            cardObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    sections.forEach((el) => sectionObs.observe(el));
    cards.forEach((el) => cardObs.observe(el));

    return () => {
      sectionObs.disconnect();
      cardObs.disconnect();
    };
  }, []);

  return (
    <div className="noryx-shell home-page">
      {/* Ambient background orbs */}
      <div className="ambient-orb ambient-orb-1" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-2" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-3" aria-hidden="true" />

      <header className="topbar">
        <a href="#hero" className="brand" aria-label="NORYX accueil">
          <span className="brand-mark">O</span>
          <span>
            <strong>NORYX</strong>
            <small>Supervision hospitalière temps réel</small>
          </span>
        </a>
        <nav className="topnav" aria-label="Navigation principale">
          <a href="#probleme">Problème</a>
          <a href="#solution">Solution</a>
          <a href="#portails">Portails</a>
          <a href="#process">Fonctionnement</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="topbar-actions">
          <a href="/platform" className="ghost-link">Voir la plateforme</a>
          <a href="/demo" className="primary-link">Demander une démo</a>
        </div>
      </header>

      <main>
        <section className="hero relative overflow-hidden" id="hero">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
          <div className="hero-copy hero-copy-centered relative z-10">
            <div className="eyebrow">Plateforme de traçabilité et de supervision des opérations hospitalières en temps réel</div>
            <h1>Le centre de contrôle <span className="gradient-text">digital</span> des opérations hospitalières</h1>
            <p>NORYX centralise la traçabilité, la supervision et le reporting des opérations hospitalières critiques dans une interface sobre, rapide et crédible pour les hôpitaux.</p>
            <div className="hero-actions">
              <a href="/demo" className="primary-link">Demander une démo</a>
              <a href="/platform" className="ghost-link">Voir la plateforme</a>
              <a href="/contact" className="ghost-link subtle">Planifier un échange</a>
            </div>
            <div className="hero-meta">
              <span>Temps réel</span>
              <span>Mobile + offline</span>
              <span>Audit logs</span>
              <span>Multi-sites</span>
              <span>Rapports PDF</span>
            </div>
          </div>

        </section>

        <section id="dashboard" className="section-block">
          <div className="dashboard-container">
            <div className="preview-window premium-dashboard">
              <div className="window-bar">
                <span /><span /><span />
                <div>noryx.hospital / dashboard</div>
              </div>
              <div className="preview-grid">
                <aside className="preview-sidebar">
                  <strong>NORYX</strong>
                  <div className="sidebar-links">
                    <button type="button" className="side-active">Dashboard</button>
                    <button type="button">Incidents</button>
                    <button type="button">Rondes</button>
                    <button type="button">Rapports</button>
                  </div>
                </aside>
                <section className="preview-main">
                  <div className="preview-title-row">
                    <div>
                      <h2>Dashboard opérationnel</h2>
                      <p>Aujourd&apos;hui, 27 mai 2026</p>
                    </div>
                    <span className="live-pill">En direct</span>
                  </div>
                  <div className="stats-grid">
                    {dashboardStats.map((stat) => (
                      <article key={stat.label} className={`stat-card tone-${stat.tone}`}>
                        <span>{stat.label}</span>
                        <strong>{stat.value}</strong>
                        <small>{stat.trend}</small>
                      </article>
                    ))}
                  </div>
                  <div className="preview-artwork" aria-label="Synthèse opérationnelle NORYX">
                    <div className="artwork-topline">
                      <span>Vue consolidée</span>
                      <span className="artwork-pill">Secteur critique</span>
                    </div>
                    <div className="artwork-body">
                      <div className="artwork-stack">
                        <strong>Flux en cours</strong>
                        <div className="artwork-bars" aria-hidden="true">
                          <span style={{ height: "72%" }} />
                          <span style={{ height: "48%" }} />
                          <span style={{ height: "84%" }} />
                          <span style={{ height: "56%" }} />
                          <span style={{ height: "66%" }} />
                        </div>
                      </div>
                      <div className="artwork-stack artwork-side">
                        <div className="artwork-pill tone-green">4 fermés</div>
                        <div className="artwork-pill tone-blue">2 en suivi</div>
                        <div className="artwork-pill tone-amber">1 à escalader</div>
                      </div>
                    </div>
                  </div>
                  <div className="mini-panel">
                    <div className="mini-panel-title">Incidents récents</div>
                    <div className="incident-list">
                      {incidents.map((incident) => (
                        <div key={incident.title} className="incident-row">
                          <span className={`type-pill tone-${incident.tone}`}>{incident.type}</span>
                          <div>
                            <strong>{incident.title}</strong>
                            <p>{incident.detail}</p>
                          </div>
                          <time>{incident.time}</time>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block" id="probleme">
          <div className="section-head">
            <span className="section-kicker">Problème</span>
            <h2>Le papier fragilise la traçabilité et ralentit les équipes</h2>
            <p>Les mains courantes papier créent des pertes d&apos;information, des doublons, des délais de transmission et une lecture trop faible pour piloter une activité hospitalière critique.</p>
          </div>
          <div className="problem-grid">
            <article><strong>Information dispersée</strong><p>Des faits notés trop tard, sur des supports différents et difficiles à consolider.</p></article>
            <article><strong>Audit complexe</strong><p>Des contrôles manuels plus longs, sans historique immédiatement exploitable.</p></article>
            <article><strong>Supervision faible</strong><p>Une visibilité limitée pour les responsables, surtout en multi-sites.</p></article>
            <article><strong>Risque opérationnel</strong><p>Des erreurs qui s&apos;accumulent quand la coordination repose encore sur des flux non structurés.</p></article>
          </div>
        </section>

        <section className="section-block alt" id="solution">
          <div className="section-head compact">
            <span className="section-kicker">Solution</span>
            <h2>NORYX structure la supervision sans alourdir le terrain</h2>
            <p>La plateforme met en place un flux unique: saisie rapide, suivi en temps réel, reporting clair et historique exploitable pour les établissements de santé.</p>
          </div>
          <div className="solution-grid">
            <article><strong>Traçabilité unifiée</strong><p>Chaque événement est enregistré dans un registre digital cohérent et consultable.</p></article>
            <article><strong>Supervision temps réel</strong><p>Les équipes voient ce qui se passe, ce qui doit être traité et ce qui est déjà résolu.</p></article>
            <article><strong>Reporting opérationnel</strong><p>Les directions récupèrent des rapports lisibles pour l&apos;audit, la conformité et l&apos;analyse.</p></article>
            <article><strong>Expérience mobile</strong><p>L&apos;agent saisit rapidement sur mobile, y compris dans les contextes à faible connectivité.</p></article>
            <article><strong>Conception enterprise</strong><p>Le produit inspire confiance grâce à une hiérarchie claire, des rôles précis et un langage métier.</p></article>
          </div>
        </section>

        <section className="section-block" id="portails">
          <div className="section-head">
            <span className="section-kicker">Les 4 portails</span>
            <h2>Quatre interfaces, une même logique de contrôle</h2>
            <p>Chaque profil voit un environnement adapté à son niveau de responsabilité, sans complexité inutile ni jargon produit.</p>
          </div>
          <div className="portal-grid">
            {portals.map((portal) => (
              <article key={portal.name} className="portal-card">
                <div className="portal-dot" style={{ background: portal.color }} />
                <h3>{portal.name}</h3>
                <p>{portal.description}</p>
                <ul>
                  {portal.points.map((point) => (<li key={point}>{point}</li>))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block alt" id="process">
          <div className="section-head compact">
            <span className="section-kicker">Fonctionnement</span>
            <h2>Un cycle simple: saisir, superviser, consolider, auditer</h2>
          </div>
          <div className="process-grid">
            {processSteps.map((item) => (
              <article key={item.step} className="process-card">
                <span>{item.step}</span>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>



        <section className="section-block alt" id="usages">
          <div className="section-head compact">
            <span className="section-kicker">Cas d&apos;usage</span>
            <h2>Des scénarios concrets, compréhensibles par les équipes hospitalières</h2>
          </div>
          <div className="usecase-grid">
            {useCases.map((item) => (
              <article key={item.title} className="usecase-card"><strong>{item.title}</strong><p>{item.text}</p></article>
            ))}
          </div>
        </section>

        <section className="section-block" id="confiance">
          <div className="section-head compact">
            <span className="section-kicker">Sécurité &amp; conformité</span>
            <h2>Une base crédible pour les environnements hospitaliers exigeants</h2>
            <p>NORYX met en avant les éléments attendus d&apos;une solution enterprise: traçabilité, contrôle des accès, stabilité et lecture simple des responsabilités.</p>
          </div>
          <div className="trust-grid">
            {trustItems.map((item) => (
              <article key={item} className="trust-card"><strong>{item}</strong><p>Signal clair pour les équipes qui veulent un suivi propre, stable et auditable.</p></article>
            ))}
          </div>
          <div className="compliance-list">
            {compliance.map((item) => (<span key={item} className="chip">{item}</span>))}
          </div>
        </section>

        <section className="section-block alt" id="faq">
          <div className="section-head compact">
            <span className="section-kicker">FAQ SEO</span>
            <h2>Réponses directes sur NORYX et son usage hospitalier</h2>
          </div>
          <div className="faq-grid faq-grid-home">
            {faq.map((item) => (
              <details key={item.question} className="faq-card"><summary>{item.question}</summary><p>{item.answer}</p></details>
            ))}
          </div>
        </section>

        <section className="section-block" id="glossaire">
          <div className="section-head compact">
            <span className="section-kicker">Glossaire</span>
            <h2>Définitions utiles pour les équipes et les moteurs IA</h2>
          </div>
          <div className="glossary-grid">
            {glossary.map((item) => (
              <article key={item.term} className="glossary-card"><strong>{item.term}</strong><p>{item.definition}</p></article>
            ))}
          </div>
        </section>

        <section className="section-block alt" id="temoignages">
          <div className="section-head compact">
            <span className="section-kicker">Retours terrain</span>
            <h2>Ce que la plateforme doit faire ressentir en démo</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.role} className="testimonial-card"><p>&quot;{item.quote}&quot;</p><strong>{item.role}</strong></article>
            ))}
          </div>
        </section>

        <section className="section-block cta-block" id="cta">
          <div className="cta-card">
            <span className="section-kicker">Conversion</span>
            <h2>Demandez une démonstration et positionnez NORYX dans votre organisation</h2>
            <p>Une démo permet de montrer la logique produit, les rôles, les rapports et le niveau de crédibilité attendu pour un déploiement hospitalier.</p>
            <div className="hero-actions center">
              <a href="/demo" className="primary-link">Demander une démo</a>
              <a href="/platform" className="ghost-link">Voir la plateforme</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <strong>NORYX</strong>
          <p>La plateforme de traçabilité et de supervision en temps réel des opérations hospitalières critiques.</p>
        </div>
        <nav aria-label="Pied de page">
          <Link href="/platform">Plateforme</Link>
          <Link href="/demo">Démo</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/ressources">Ressources</Link>
          <Link href="/main-courante-electronique-hopital">Main courante électronique hôpital</Link>
        </nav>
      </footer>

      <div className="mobile-cta-bar" aria-label="Actions rapides">
        <a href="/platform" className="ghost-link">Voir la plateforme</a>
        <a href="/demo" className="primary-link">Demander une démo</a>
      </div>

      <a href="/demo" className="floating-cta" aria-label="Demander une démo NORYX">Demander une démo</a>

      {structuredData.map((entry, index) => (
        <script key={`home-${index}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }} />
      ))}
    </div>
  );
}
