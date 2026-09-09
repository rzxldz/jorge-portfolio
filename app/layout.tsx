import type { Metadata } from "next";
import ScrollEffects from "@/components/ScrollEffects";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jorge Emmanuel Roldán Márquez | Portfolio",

  description:
    "Portfolio de Jorge Emmanuel Roldán Márquez, estudiante de Ingeniería en Tecnologías de Cómputo y Telecomunicaciones. Proyectos de software, desarrollo web y tecnología.",

  keywords: [
    "Jorge Emmanuel Roldán Márquez",
    "Portfolio",
    "Software Developer",
    "Web Developer",
    "Tecnologías de Cómputo",
    "Universidad Iberoamericana",
    "Next.js",
    "JavaScript",
    "Java",
    "Python",
  ],

  authors: [
    {
      name: "Jorge Emmanuel Roldán Márquez",
    },
  ],

  openGraph: {
    title: "Jorge Emmanuel Roldán Márquez | Portfolio",

    description:
      "Software · Web · Mobile. Conoce mis proyectos, habilidades y formación.",

    url: "https://jorge-portfolio-mu.vercel.app/",

    siteName: "Jorge Roldán Portfolio",

    type: "website",

    locale: "es_MX",
  },

  twitter: {
    card: "summary_large_image",

    title: "Jorge Emmanuel Roldán Márquez | Portfolio",

    description:
      "Software · Web · Mobile. Proyectos, habilidades y formación.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ScrollEffects />
        {children}
      </body>
    </html>
  );
}