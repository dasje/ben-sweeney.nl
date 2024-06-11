"use client";

import Background from "./ui/Background";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <div className="absolute">
            <Background />
            {/* Layout UI */}
          </div>
          <div className="relative">{children}</div>
        </main>
      </body>
    </html>
  );
}
