"use client";
import { useState } from "react";
import Button from "./ui/Button";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  const l = [
    { pageName: "About", pageUrl: "/" },
    { pageName: "CV", pageUrl: "/" },
  ];
  return (
    <div className="h-screen">
      <div className="flex justify-center">
        <Header pageTitle="ME" links={l} />
      </div>
      <div className="mb-auto"></div>
      <div className="flex justify-center fixed inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
}
