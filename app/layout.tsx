import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gotFont = localFont({
  src: "./font/GOT.ttf",
  variable: "--font-got",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oldwestdeveloper-hotd.vercel.app"),
  title: "DRAGÕES TARGARYEN",
  description: "Catálogo interativo dos maiores dragões de Westeros.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "DRAGÕES TARGARYEN",
    description: "Catálogo interativo dos maiores dragões de Westeros.",
    url: "https://oldwestdeveloper-hotd.vercel.app",
    siteName: "DRAGÕES TARGARYEN",
    images: [
      {
        // Forçando o link direto do arquivo que está na sua pasta app
        url: "https://oldwestdeveloper-hotd.vercel.app/og-image.png",
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${gotFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
