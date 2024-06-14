"use client";

import Card from "@/app/ui/Card";
import * as portfolioDetails from "@/data/json/portfolioDetails.json";
import portfolioDetailsInterface from "@/data/interfaces/portfolioDetailsInterface";

export default function Page() {
  const portfolio = portfolioDetails as portfolioDetailsInterface;
  return (
    <Card>
      <div className="bg-thirdcolor p-5 rounded-2xl text-white font-light tracking-wide">
        {portfolio.art.artOverview}
      </div>
    </Card>
  );
}
