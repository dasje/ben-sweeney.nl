"use client";

import Background from "./ui/Background";
import "@/app/globals.css";
import { inter, chauPhilomene } from "@/app/ui/fonts";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

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
          <div className="relative h-screen">
            <div className="flex justify-center sticky inset-x-0 top-0 block">
              <Header pageTitle="Ben Sweeney" links={nav} />
            </div>
            <div className="grid h-screen place-items-start justify-items-center block space-y-4">
              {children}
            </div>
            <div className="mb-auto"></div>
            <div className="flex justify-center fixed inset-x-0 bottom-0">
              <Footer />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
