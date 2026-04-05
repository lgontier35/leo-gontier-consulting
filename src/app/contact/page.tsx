import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact | Léo Gontier — Parlons de votre projet",
  description:
    "Premier échange gratuit de 30 minutes. Décrivez-moi votre besoin, je vous réponds sous 24h avec un premier avis et les prochaines étapes.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          tag="Contact"
          title="Un projet en tête ?"
          highlight="Parlons-en."
          subtitle="Premier échange gratuit de 30 minutes. Pas d'engagement. Je vous réponds sous 24h."
        />
        <Contact withHeader={false} />
      </main>
      <Footer />
    </>
  );
}
