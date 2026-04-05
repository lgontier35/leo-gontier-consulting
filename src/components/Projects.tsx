"use client";

import AnimatedSection from "./AnimatedSection";
import {
  BarChart3,
  ShoppingCart,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { ReactNode } from "react";

interface Project {
  icon: ReactNode;
  badge: string;
  title: string;
  description: string;
  features: string[];
  stack: string[];
  gradient: string;
  link?: string;
}

const projects: Project[] = [
  {
    icon: <ShoppingCart size={24} />,
    badge: "SaaS B2B",
    title: "Plateforme B2B Cosmétique",
    description:
      "Plateforme e-commerce B2B complète avec CRM intégré pour une marque de cosmétiques. Prospection, gestion client, commandes, tarification dégressives et synchronisation Shopify.",
    features: [
      "CRM intégré avec pipeline de prospection",
      "E-commerce B2B avec tarifs dégressifs",
      "Synchronisation Shopify & paiement Stripe",
      "Dashboard admin avec KPI temps réel",
      "Automatisation logistique & envois via API",
      "Gestion d'échantillons et relances automatiques",
    ],
    stack: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Shopify", "API REST"],
    gradient: "from-accent to-accent-secondary",
    link: "https://omecosmetique-pro.com",
  },
  {
    icon: <BarChart3 size={24} />,
    badge: "Plateforme BI",
    title: "Hub BI — Portail Power BI",
    description:
      "Plateforme centralisée de gestion et diffusion de rapports Power BI pour un groupe multi-sites. Gestion des accès par rôle, suivi de projets BI et gouvernance data.",
    features: [
      "Portail centralisé de rapports Power BI",
      "Gestion des accès par rôle (RBAC)",
      "Suivi de projets BI avec éléments sensibles",
      "Système d'alertes et de demandes",
      "Intégration GitHub pour le versioning",
    ],
    stack: ["Next.js 15", "TypeScript", "Prisma", "SQLite", "NextAuth", "Recharts"],
    gradient: "from-accent-tertiary to-accent",
  },
  {
    icon: <Layers size={24} />,
    badge: "En construction",
    title: "Et bien d'autres à venir...",
    description:
      "Chaque nouveau projet est une opportunité de résoudre un vrai problème métier. E-commerce, CRM, automatisation, dashboards — le prochain projet, c'est peut-être le vôtre.",
    features: [
      "Portails client sur-mesure",
      "Dashboards métier interactifs",
      "Automatisation de process",
      "Intégrations API complexes",
      "Applications métier complètes",
    ],
    stack: ["Votre stack", "Vos besoins", "Sur-mesure"],
    gradient: "from-accent-secondary to-success",
  },
];

interface Props {
  withHeader?: boolean;
}

export default function Projects({ withHeader = true }: Props) {
  return (
    <section id="projets" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {withHeader && (
          <AnimatedSection className="text-center mb-14">
            <span className="tag mb-4 inline-block">Réalisations</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Des projets <span className="gradient-text-warm">concrets</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Pas de maquettes Figma. Des produits livrés, en production.
            </p>
          </AnimatedSection>
        )}

        <div className="space-y-8">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl overflow-hidden group">
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white`}
                      >
                        {project.icon}
                      </div>
                      <div>
                        <span className="tag text-xs">{project.badge}</span>
                        <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
                      </div>
                    </div>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-text-muted hover:text-accent-light transition-colors"
                      >
                        <span className="hidden sm:inline">Voir le projet</span>
                        <ArrowUpRight size={18} />
                      </a>
                    ) : (
                      <ArrowUpRight
                        size={20}
                        className="text-text-muted group-hover:text-accent-light transition-colors"
                      />
                    )}
                  </div>

                  <p className="text-text-secondary leading-relaxed mb-6 max-w-3xl">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">
                        Fonctionnalités clés
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm text-text-secondary"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">
                        Stack technique
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg text-sm bg-bg-card border border-border text-text-secondary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
