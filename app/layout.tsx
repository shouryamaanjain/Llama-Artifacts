import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import "./globals.css";

let title = "Llama Artifacts – AI Code Generator/Runner";
let description = "Generate your next app with Llama 3.1 405B";
let url = "https://artifacts.shouryamaanjain.com/";
let ogimage = "";
let sitename = "artifacts.shouryamaanjain.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <PlausibleProvider domain="artifacts.shouryamaanjain.com" />
      </head>

      {children}
    </html>
  );
}
