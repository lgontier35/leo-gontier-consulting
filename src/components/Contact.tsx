"use client";

import AnimatedSection from "./AnimatedSection";
import { Mail, Calendar, ArrowRight } from "lucide-react";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center">
          <span className="tag mb-4 inline-block">Contact</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Un projet en tête ?
            <br />
            <span className="gradient-text">Parlons-en.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Chaque collaboration commence par un échange. Décrivez-moi votre projet,
            vos enjeux, vos idées — même floues. Je vous réponds sous 24h avec
            un premier avis et les prochaines étapes possibles.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left - CTA */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Premier échange gratuit</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  30 minutes pour comprendre votre besoin et vous dire honnêtement
                  si je peux vous aider. Pas d&apos;engagement, pas de surprise.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@leogontier.fr"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light group-hover:bg-accent/20 transition-colors">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-sm text-text-muted">Email</div>
                      <div className="text-text-primary group-hover:text-accent-light transition-colors">
                        contact@leogontier.fr
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/leogontier/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light group-hover:bg-accent/20 transition-colors">
                      <LinkedinIcon size={18} />
                    </div>
                    <div>
                      <div className="text-sm text-text-muted">LinkedIn</div>
                      <div className="text-text-primary group-hover:text-accent-light transition-colors">
                        linkedin.com/in/leogontier
                      </div>
                    </div>
                  </a>
                  <a
                    href="#contact"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light group-hover:bg-accent/20 transition-colors">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <div className="text-sm text-text-muted">Rendez-vous</div>
                      <div className="text-text-primary group-hover:text-accent-light transition-colors">
                        Réserver un créneau
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right - Quick topics */}
              <div>
                <h3 className="text-lg font-semibold mb-4">On peut parler de :</h3>
                <div className="space-y-3">
                  {[
                    "Créer un dashboard Power BI sur-mesure",
                    "Développer une application web / SaaS",
                    "Automatiser des processus répétitifs",
                    "Intégrer de l'IA dans votre workflow",
                    "Connecter vos outils entre eux (API)",
                    "Construire un CRM ou ERP adapté",
                    "Mettre en place une stratégie data",
                    "Auditer et optimiser l'existant",
                  ].map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <ArrowRight size={14} className="text-accent-light shrink-0" />
                      {topic}
                    </div>
                  ))}
                </div>

                <a
                  href="mailto:contact@leogontier.fr"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-light transition-all hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
                >
                  Envoyer un message
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
