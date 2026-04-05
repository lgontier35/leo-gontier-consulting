"use client";

import AnimatedSection from "../AnimatedSection";
import { ShoppingCart, ArrowUpRight, Check } from "lucide-react";

export default function HomeFeatured() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <span className="tag mb-4 inline-block">Cas client récent</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Un projet <span className="gradient-text-warm">livré en production</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="glass-card rounded-2xl overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left — Visual/Gradient side */}
              <div className="lg:col-span-2 bg-gradient-to-br from-accent via-accent-tertiary to-accent-secondary p-10 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-[40px]" />
                  <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-[60px]" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-6">
                    <ShoppingCart size={24} />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-3">
                    SaaS B2B &middot; E-commerce
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    ŌME Cosmétique
                  </h3>
                  <p className="text-white/80 text-sm">
                    Plateforme B2B complète avec CRM intégré
                  </p>
                </div>
                <a
                  href="https://omecosmetique-pro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center gap-2 text-white text-sm font-medium hover:gap-3 transition-all mt-8"
                >
                  omecosmetique-pro.com
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Right — Content */}
              <div className="lg:col-span-3 p-8 md:p-10">
                <p className="text-text-secondary leading-relaxed mb-6">
                  Plateforme e-commerce B2B complète avec CRM intégré pour une marque de
                  cosmétiques. Prospection, gestion client, commandes, tarification dégressive
                  et automatisation logistique via API.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    "CRM + pipeline prospection",
                    "Tarifs dégressifs B2B",
                    "Sync Shopify & Stripe",
                    "Automatisation logistique API",
                    "Dashboard KPI temps réel",
                    "Gestion échantillons auto",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <Check size={14} className="text-success shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Next.js 15", "TypeScript", "PostgreSQL", "Stripe", "Shopify", "API REST"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs bg-bg-card border border-border text-text-secondary"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <a
                  href="/realisations"
                  className="inline-flex items-center gap-2 text-accent-light hover:text-white transition-colors text-sm group"
                >
                  Voir tous les projets
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
