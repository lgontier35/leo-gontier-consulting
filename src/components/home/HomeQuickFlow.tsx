"use client";

import AnimatedSection from "../AnimatedSection";
import { MessageSquare, Rocket, RefreshCcw, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare size={20} />,
    title: "On échange",
    description: "30 min offertes. On parle de votre besoin, je vous dis si je peux aider.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Je conçois & je livre",
    description: "Audit, proposition cadrée, développement itératif. Transparence totale.",
  },
  {
    icon: <RefreshCcw size={20} />,
    title: "On fait évoluer",
    description: "Formation, documentation, support. La solution grandit avec votre activité.",
  },
];

export default function HomeQuickFlow() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <span className="tag mb-4 inline-block">Comment ça se passe</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            3 étapes. <span className="gradient-text">Pas de surprise.</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          {/* Connector lines (desktop only) */}
          <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.1}>
              <div className="text-center relative">
                <div className="w-16 h-16 rounded-2xl bg-bg-card border border-border mx-auto mb-4 flex items-center justify-center text-accent-light relative z-10">
                  {step.icon}
                </div>
                <div className="text-xs font-mono text-text-muted mb-1">0{i + 1}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10">
          <a
            href="/approche"
            className="inline-flex items-center gap-2 text-accent-light hover:text-white transition-colors group text-sm"
          >
            Voir ma méthode complète
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
