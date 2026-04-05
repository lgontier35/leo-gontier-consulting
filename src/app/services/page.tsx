import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import HomeFinalCTA from "@/components/home/HomeFinalCTA";

export const metadata = {
  title: "Services | Léo Gontier — Data, BI, Dev, Automatisation",
  description:
    "Découvrez mes services : Business Intelligence, développement web, automatisation, IA, CRM, e-commerce, API. Un seul interlocuteur pour tous vos besoins tech.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          tag="Services"
          title="Un spectre"
          highlight="complet de compétences"
          subtitle="De la stratégie data à la livraison de produits. Un seul interlocuteur pour tous vos besoins tech."
        />
        <Services withHeader={false} />
        <Expertise withHeader={true} />
        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
