import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local"; // Importação necessária para a fonte local
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configuração da sua fonte Game of Thrones
const gotFont = localFont({
  src: "./font/GOT.ttf",
  variable: "--font-got",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DRAGÕES TARGARYEN",
  description: "Conheça a história e os detalhes dos maiores dragões de Westeros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        // Injetamos a variável gotFont.variable aqui junto com as outras
        className={`${geistSans.variable} ${geistMono.variable} ${gotFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
