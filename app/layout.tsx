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
  // Define a base para todos os links do site
  metadataBase: new URL('https://oldwestdeveloper-hotd.vercel.app'),
  title: "DRAGÕES TARGARYEN",
  description: "Conheça a história e os detalhes dos maiores dragões de Westeros.",
  
  // O ícone em src/app/icon.png já é detectado automaticamente, 
  // então não precisamos da propriedade 'icons' aqui.

  openGraph: {
    title: "DRAGÕES TARGARYEN",
    description: "Conheça a história e os detalhes dos maiores dragões de Westeros.",
    url: "https://oldwestdeveloper-hotd.vercel.app",
    siteName: "Dragões Targaryen",
    images: [
      {
        // Apontando para o caminho correto que você definiu: /img/
        url: "https://oldwestdeveloper-hotd.vercel.app/img/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Preview Dragões Targaryen",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
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
