"use client";

import Card from "../../ui/Card";
import portfolio from "../../lib/json/portfolio";

export default function Page() {
  return (
    <Card>
      <div className="bg-thirdcolor p-5 rounded-2xl text-white font-light tracking-wide">
        {portfolio.portfolioOverview}
      </div>
    </Card>
  );
}
