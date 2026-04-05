"use client";

import AnimatedSection from "./AnimatedSection";
import {
  BarChart3,
  Code2,
  Bot,
  Database,
  ShoppingCart,
  Workflow,
  Plug,
  Users,
  Layers,
} from "lucide-react";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
  accent?: string;
}

function ServiceCard({ icon, title, description, tags, accent = "accent" }: ServiceCardProps) {
  return (
    <div className="glass-card rounded-2xl p-6 group cursor-default h-full flex flex-col">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-${accent}/10 text-${accent}-light group-hover:bg-${accent}/20 transition-colors shrink-0`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-text-primary">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    icon: <BarChart3 size={22} />,
    title: "Business Intelligence",
    description:
      "Tableaux de bord Power BI sur-mesure, modélisation de données, KPI métier. Vos données deviennent enfin exploitables et visuelles.",
    tags: ["Power BI", "DAX", "Dataflows", "KPI"],
  },
  {
    icon: <Database size={22} />,
    title: "Data & Architecture",
    description:
      "Structuration de vos bases de données, pipelines ETL, nettoyage et gouvernance. De la donnée brute à la donnée fiable.",
    tags: ["SQL", "PostgreSQL", "ETL", "Modélisation"],
  },
  {
    icon: <Code2 size={22} />,
    title: "Développement Web",
    description:
      "Applications web modernes et performantes. Sites vitrines, plateformes SaaS, dashboards interactifs, portails métier.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
  },
  {
    icon: <ShoppingCart size={22} />,
    title: "E-commerce & B2B",
    description:
      "Plateformes de vente en ligne, gestion de catalogues, tarification dynamique, intégrations Stripe et Shopify.",
    tags: ["Shopify", "Stripe", "B2B", "Checkout"],
  },
  {
    icon: <Users size={22} />,
    title: "CRM & ERP",
    description:
      "Outils de gestion client et processus métier sur-mesure. Suivi prospect, commandes, facturation, pilotage d'activité.",
    tags: ["CRM", "ERP", "Prospection", "Suivi"],
  },
  {
    icon: <Bot size={22} />,
    title: "Intelligence Artificielle",
    description:
      "Intégration d'IA dans vos processus : chatbots, analyse prédictive, génération de contenu, assistants métier.",
    tags: ["LLM", "API IA", "Chatbot", "Prédiction"],
  },
  {
    icon: <Workflow size={22} />,
    title: "Automatisation",
    description:
      "Élimination des tâches répétitives. Workflows automatisés, scripts, intégrations entre outils, gains de productivité mesurables.",
    tags: ["Power Automate", "Scripts", "Workflows", "No-code"],
  },
  {
    icon: <Plug size={22} />,
    title: "API & Intégrations",
    description:
      "Connexion de vos outils entre eux. APIs REST, webhooks, synchronisation de données temps réel entre vos systèmes.",
    tags: ["REST API", "Webhooks", "OAuth", "Sync"],
  },
  {
    icon: <Layers size={22} />,
    title: "Conseil & Transformation",
    description:
      "Audit de l'existant, choix technologiques, roadmap produit. Du diagnostic à la stratégie de transformation digitale.",
    tags: ["Audit", "Architecture", "Roadmap", "Stratégie"],
  },
];

interface Props {
  withHeader?: boolean;
}

export default function Services({ withHeader = true }: Props) {
  return (
    <section id="services" className={withHeader ? "py-20 px-6" : "pb-20 px-6"}>
      <div className="max-w-7xl mx-auto">
        {withHeader && (
          <AnimatedSection className="text-center mb-16">
            <span className="tag mb-4 inline-block">Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Un spectre <span className="gradient-text">complet</span> de compétences
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              De la stratégie data à la livraison de produits. Un seul interlocuteur
              pour tous vos besoins tech.
            </p>
          </AnimatedSection>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.05}>
              <ServiceCard {...service} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
