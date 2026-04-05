interface Props {
  tag: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  highlightStyle?: "cool" | "warm";
}

export default function PageHeader({ tag, title, highlight, subtitle, highlightStyle = "cool" }: Props) {
  const gradientClass = highlightStyle === "warm" ? "gradient-text-warm" : "gradient-text";

  return (
    <section className="pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-accent-tertiary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="tag mb-5 inline-block">{tag}</span>
        <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
          {title}{" "}
          {highlight && <span className={gradientClass}>{highlight}</span>}
        </h1>
        {subtitle && (
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
