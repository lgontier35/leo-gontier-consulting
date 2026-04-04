import Navbar from "@/components/Navbar";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Stack technique | Léo Gontier",
  description:
    "Découvrez mes compétences techniques : Power BI, DAX, SQL, Next.js, React, TypeScript, automatisation, IA et plus.",
};

export default function ExpertisePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Expertise />
      </main>
      <Footer />
    </>
  );
}
