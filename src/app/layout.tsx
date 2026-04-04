import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Léo Gontier | Consultant Data, BI & Développement",
  description:
    "Consultant indépendant spécialisé en Data, Business Intelligence, Développement Web, Automatisation et IA. Accompagnement sur-mesure pour transformer votre activité.",
  keywords: [
    "consultant data",
    "power bi",
    "développement web",
    "automatisation",
    "intelligence artificielle",
    "CRM",
    "ERP",
    "e-commerce",
    "API",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} antialiased`}>
      <body className="grid-bg">{children}</body>
    </html>
  );
}
