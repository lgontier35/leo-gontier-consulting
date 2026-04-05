"use client";

import AnimatedSection from "./AnimatedSection";
import {
  MessageSquare,
  Search,
  Lightbulb,
  Rocket,
  RefreshCcw,
  Handshake,
} from "lucide-react";
import { ReactNode } from "react";

interface Step {
  icon: ReactNode;
  number: string;
  title: string;
  description: string;
  gradient: string;
}

const steps: Step[] = [
  {
    icon: <MessageSquare size={22} />,
    number: "01",
    title: "Échange & Découverte",
    description:
      "On se parle. Je comprends votre métier, vos enjeux, vos contraintes. Pas de brief standardisé — un vrai dialogue.",
    gradient: "from-accent to-accent-light",
  },
  {
    icon: <Search size={22} />,
    number: "02",
    title: "Audit & Diagnostic",
    description:
      "J'analyse l'existant : outils, données, processus, points de friction. J'identifie les quick-wins et les axes de transformation.",
    gradient: "from-accent-light to-accent-secondary",
  },
  {
    icon: <Lightbulb size={22} />,
    number: "03",
    title: "Proposition & Cadrage",
    description:
      "Recommandation sur-mesure avec un plan d'action clair, des étapes concrètes et une roadmap réaliste.",
    gradient: "from-accent-secondary to-accent-secondary",
  },
  {
    icon: <Rocket size={22} />,
    number: "04",
    title: "Réalisation & Livraison",
    description:
      "Je développe, j'itère avec vous, je livre. Chaque étape est validée ensemble. Transparence totale.",
    gradient: "from-accent-secondary to-accent-tertiary",
  },
  {
    icon: <RefreshCcw size={22} />,
    number: "05",
    title: "Formation & Transfert",
    description:
      "Je vous forme sur les livrables. Vous êtes autonomes. Documentation complète et support inclus.",
    gradient: "from-accent-tertiary to-accent",
  },
  {
    icon: <Handshake size={22} />,
    number: "06",
    title: "Suivi & Évolution",
    description:
      "La relation ne s'arrête pas à la livraison. Je reste disponible pour faire évoluer la solution.",
    gradient: "from-accent to-accent-tertiary",
  },
];

interface Props {
  withHeader?: boolean;
}

export default function Methodology({ withHeader = true }: Props) {
  return (
    <section id="methodologie" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {withHeader && (
          <AnimatedSection className="text-center mb-14">
            <span className="tag mb-4 inline-block">Méthodologie</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Un accompagnement <span className="gradient-text-warm">sur-mesure</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Chaque projet est unique. Je travaille en one-to-one avec vous,
              pas de sous-traitance. Vous parlez directement à celui qui conçoit et développe.
            </p>
          </AnimatedSection>
        )}

        {/* Key values */}
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">1:1</div>
            <div className="text-text-secondary text-sm">
              Un interlocuteur unique du début à la fin. Pas d&apos;équipe tournante.
            </div>
          </div>
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold gradient-text-warm mb-2">100%</div>
            <div className="text-text-secondary text-sm">
              Transparent. Vous avez accès à tout : code, avancement, décisions.
            </div>
          </div>
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">Agile</div>
            <div className="text-text-secondary text-sm">
              Itérations courtes. Feedback continu. Le produit évolue avec vous.
            </div>
          </div>
        </AnimatedSection>

        {/* Process steps — centered grid layout */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative glass-card rounded-2xl p-6 text-center overflow-hidden"
              >
                {/* Top gradient bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} opacity-40 group-hover:opacity-100 transition-opacity`}
                />

                {/* Step number */}
                <span className="text-xs font-mono text-text-muted">{step.number}</span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light mx-auto mt-3 mb-4 group-hover:bg-accent/20 group-hover:border-accent/40 group-hover:scale-105 transition-all">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Visual flow arrow */}
        <AnimatedSection className="flex justify-center mt-10">
          <div className="flex items-center gap-3 text-text-muted text-sm">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent/40" />
            <span>Un cycle continu, pas un projet one-shot</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent/40" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
