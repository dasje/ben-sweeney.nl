"use client";

import Background from "./ui/Background";
import "@/app/globals.css";
import { chauPhilomene } from "@/app/ui/fonts";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Link from "next/link";
import * as sitemapDetails from "@/data/json/sitemap.json";
import sitemapInterface from "@/data/interfaces/sitemapInterface";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sitemap = sitemapDetails as sitemapInterface;
  return (
    <html lang="en">
      <head>
        <title>Ben Sweeney</title>
      </head>
      <body className={`${chauPhilomene.className} antialiased`}>
        <main>
          <div className="absolute">
            <Background />
            {/* Layout UI */}
          </div>
          <div className="relative min-h-screen flex flex-col">
            <div className="z-50 flex justify-center sticky inset-x-0 top-0 block">
              <Header
                pageTitle="Ben Sweeney"
                subtitle=""
                homeLink={sitemap.home.pageUrl}
                sitemap={sitemap.home}
              />
            </div>
            <div className="flex-grow">
              <div className="z-10 grid grid-cols-1 place-items-start justify-items-center block space-y-4">
                {children}
              </div>
            </div>
            <div className="z-50 flex justify-center md:sticky inset-x-0 bottom-0 block">
              <Footer contactLink={sitemap.contact.pageUrl} />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
