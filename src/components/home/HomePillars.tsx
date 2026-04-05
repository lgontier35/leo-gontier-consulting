"use client";

import AnimatedSection from "../AnimatedSection";
import { BarChart3, Code2, Bot, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: <BarChart3 size={24} />,
    title: "Data & BI",
    description:
      "Tableaux de bord Power BI, pipelines data, KPI métier. Vos données deviennent un levier de décision.",
    gradient: "from-accent to-accent-light",
  },
  {
    icon: <Code2 size={24} />,
    title: "Développement applicatif",
    description:
      "Applications web sur-mesure : CRM, plateformes B2B, portails métier. Next.js, TypeScript, PostgreSQL.",
    gradient: "from-accent-light to-accent-secondary",
  },
  {
    icon: <Bot size={24} />,
    title: "Automatisation & IA",
    description:
      "Élimination des tâches répétitives. Workflows automatisés, chatbots IA, intégrations API.",
    gradient: "from-accent-tertiary to-accent",
  },
];

export default function HomePillars() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <span className="tag mb-4 inline-block">Ce que je fais</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Trois pôles, <span className="gradient-text">un seul interlocuteur</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Les vrais problèmes ne rentrent pas dans des cases. Je couvre le spectre complet.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-6 h-full group relative overflow-hidden">
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.gradient} opacity-50 group-hover:opacity-100 transition-opacity`}
                />
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center text-white mb-4`}
                >
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10">
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-accent-light hover:text-white transition-colors group text-sm"
          >
            Voir tous les services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
