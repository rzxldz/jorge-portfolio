import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jorge Emmanuel Roldán Márquez | Portfolio",
  description:
    "Portafolio de Jorge Emmanuel Roldán Márquez, estudiante de Ingeniería en Tecnologías de Cómputo y Telecomunicaciones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
