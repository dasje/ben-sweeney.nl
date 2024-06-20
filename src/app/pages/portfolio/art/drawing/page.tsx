"use client";

import Card from "@/app/ui/Card";
import portfolioDetailsInterface from "@/data/interfaces/portfolioDetailsInterface";
import * as portfolio from "@/data/json/portfolioDetails.json";

export default function Page() {
  const portfolioDetails = portfolio as portfolioDetailsInterface;
  return (
    <Card title="Overview">
      <div className="bg-thirdcolor p-5 rounded-2xl text-white font-light tracking-wide">
        {portfolio.drawing.drawingOverview}
      </div>
    </Card>
  );
}
