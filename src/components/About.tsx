"use client";

import AnimatedSection from "./AnimatedSection";
import {
  GraduationCap,
  Briefcase,
  MapPin,
  Database,
  BarChart3,
  Workflow,
  Code2,
  Rocket,
  TrendingUp,
  Bot,
  Shield,
} from "lucide-react";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface Props {
  withHeader?: boolean;
}

export default function About({ withHeader = true }: Props) {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {withHeader && (
          <AnimatedSection className="text-center mb-14">
            <span className="tag mb-4 inline-block">À propos</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Qui suis-je <span className="gradient-text">?</span>
            </h2>
          </AnimatedSection>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left column — Identity card (2/5) */}
          <AnimatedSection className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent-tertiary mx-auto mb-5 flex items-center justify-center text-3xl font-bold text-white">
                LG
              </div>

              <h3 className="text-2xl font-bold mb-1">Léo Gontier</h3>
              <p className="text-accent-light text-sm font-medium mb-1">
                Référent BI Groupe &middot; Data Analyst
              </p>
              <p className="text-text-muted text-xs mb-4">Groupe Cobredia — CDI</p>

              <div className="flex items-center justify-center gap-2 text-text-muted text-sm mb-6">
                <MapPin size={14} />
                <span>Rennes, Bretagne</span>
              </div>

              {/* Key facts */}
              <div className="space-y-3 text-left mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Briefcase size={16} className="text-accent-light shrink-0" />
                  <span className="text-text-secondary">
                    <span className="text-text-primary font-medium">Groupe Cobredia</span> — BI & Data
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <GraduationCap size={16} className="text-accent-tertiary shrink-0" />
                  <span className="text-text-secondary">
                    <span className="text-text-primary font-medium">IGR-IAE Rennes</span> — Master
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Rocket size={16} className="text-accent-secondary shrink-0" />
                  <span className="text-text-secondary">
                    <span className="text-text-primary font-medium">Étudiant-Entrepreneur PEPITE</span>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <TrendingUp size={16} className="text-success shrink-0" />
                  <span className="text-text-secondary">
                    Entrepreneur depuis <span className="text-text-primary font-medium">2022</span>
                  </span>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/leogontier/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A66C2] text-white text-sm font-medium hover:bg-[#004182] transition-colors w-full justify-center"
              >
                <LinkedinIcon size={16} />
                Voir mon profil LinkedIn
              </a>
            </div>
          </AnimatedSection>

          {/* Right column — Story + experience (3/5) */}
          <AnimatedSection className="lg:col-span-3 space-y-8" delay={0.15}>
            {/* Bio */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Mon parcours</h3>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  23 ans, serial entrepreneur depuis mes 19 ans. J&apos;ai fondé ma première
                  entreprise en 2022, suivi le programme <span className="text-text-primary font-medium">PEPITE</span> pendant
                  plus de 4 ans, et enchaîné les projets — du SaaS international à
                  la création d&apos;entreprise en passant par le développement web.
                </p>
                <p>
                  Avec <span className="text-text-primary font-medium">Typhon Club</span>, j&apos;ai
                  construit une plateforme SaaS B2B pour l&apos;industrie sneakers — solution
                  All-in-One avec 3 offres, déployée à l&apos;international.
                  <span className="text-success font-medium"> +400 000$ de CA la première année.</span>
                </p>
                <p>
                  Aujourd&apos;hui <span className="text-text-primary font-medium">Référent BI Groupe chez Cobredia</span>,
                  je conçois et déploie des écosystèmes décisionnels complets — de la donnée
                  brute aux tableaux de bord actionnables pour la Direction Générale.
                </p>
              </div>
            </div>

            {/* Expertise chez Cobredia */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Ce que je fais au quotidien</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 glass-card rounded-xl p-4">
                  <BarChart3 size={18} className="text-accent-light mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium">BI &quot;From Scratch&quot;</div>
                    <div className="text-xs text-text-muted">Power BI, DAX, Power Query, KPI</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 glass-card rounded-xl p-4">
                  <Database size={18} className="text-accent-secondary mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium">Data Engineering</div>
                    <div className="text-xs text-text-muted">SQL, API, Fabric, Azure, Scraping</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 glass-card rounded-xl p-4">
                  <Workflow size={18} className="text-accent-tertiary mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium">Automatisation</div>
                    <div className="text-xs text-text-muted">Power Automate, alertes, workflows</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 glass-card rounded-xl p-4">
                  <Bot size={18} className="text-warning mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium">IA & Innovation</div>
                    <div className="text-xs text-text-muted">Copilot Studio, GPT, chatbots</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 glass-card rounded-xl p-4">
                  <Code2 size={18} className="text-success mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium">Développement Applicatif</div>
                    <div className="text-xs text-text-muted">React, Node.js, PostgreSQL, Next.js</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 glass-card rounded-xl p-4">
                  <Shield size={18} className="text-accent-light mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium">Gouvernance & Qualité</div>
                    <div className="text-xs text-text-muted">Alertes anomalies, monitoring data</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline highlights */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Parcours entrepreneurial</h3>
              <div className="space-y-3">
                <div className="flex gap-4 items-start">
                  <div className="text-xs font-mono text-text-muted w-20 shrink-0 pt-0.5">2025</div>
                  <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
                  <div className="text-sm text-text-secondary">
                    <span className="text-text-primary font-medium">GL Motors</span> — Co-fondateur.
                    Reprogrammation automobile, partenaire officiel RS-Tronic.
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-xs font-mono text-text-muted w-20 shrink-0 pt-0.5">2023</div>
                  <div className="w-2 h-2 rounded-full bg-accent-tertiary mt-1.5 shrink-0" />
                  <div className="text-sm text-text-secondary">
                    <span className="text-text-primary font-medium">GL Custom</span> — Co-fondateur.
                    Préparation et esthétique automobile, La Chapelle des Fougeretz.
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-xs font-mono text-text-muted w-20 shrink-0 pt-0.5">2022</div>
                  <div className="w-2 h-2 rounded-full bg-accent-secondary mt-1.5 shrink-0" />
                  <div className="text-sm text-text-secondary">
                    <span className="text-text-primary font-medium">Typhon Club LLC</span> — Founder.
                    SaaS B2B sneakers, 400K$ CA an 1. Solution AIO déployée worldwide.
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-xs font-mono text-text-muted w-20 shrink-0 pt-0.5">2022</div>
                  <div className="w-2 h-2 rounded-full bg-success mt-1.5 shrink-0" />
                  <div className="text-sm text-text-secondary">
                    <span className="text-text-primary font-medium">Typhon Retail LLC</span> — Founder.
                    Première brique de l&apos;écosystème Typhon.
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-xs font-mono text-text-muted w-20 shrink-0 pt-0.5">2021</div>
                  <div className="w-2 h-2 rounded-full bg-warning mt-1.5 shrink-0" />
                  <div className="text-sm text-text-secondary">
                    <span className="text-text-primary font-medium">Programme PEPITE</span> — Étudiant-Entrepreneur.
                    4 ans dans le réseau national de l&apos;entrepreneuriat étudiant.
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
