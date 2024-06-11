"use client";

import Background from "./ui/Background";
import "@/app/globals.css";
import { inter, chauPhilomene } from "@/app/ui/fonts";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nav = [
    { pageName: "About", pageUrl: "/pages/cv/about" },
    { pageName: "Skills", pageUrl: "/pages/cv/skills" },
    { pageName: "Experience", pageUrl: "/pages/cv/experience" },
  ];
  return (
    <html lang="en">
      <body className={`${chauPhilomene.className} antialiased`}>
        <main>
          <div className="absolute">
            <Background />
            {/* Layout UI */}
          </div>
          <div className="relative min-h-screen flex flex-col">
            <Link href={"/"}>
              <div className="flex justify-center sticky inset-x-0 top-0 block">
                <Header pageTitle="Ben Sweeney" links={nav} />
              </div>
            </Link>
            <div className="flex-grow">
              <div className="grid grid-cols-1 place-items-start justify-items-center block space-y-4">
                {children}
              </div>
            </div>
            <div className="flex justify-center md:sticky inset-x-0 bottom-0 block">
              <Footer />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
