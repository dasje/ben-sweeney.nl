"use client";

import Card from "../../../ui/Card";
import * as deets from "@/data/json/details.json";
import detailsInterface from "@/data/interfaces/detailsInterface";

export default function Page() {
  const details = deets as detailsInterface;
  return (
    <Card title="About">
      <div className="bg-thirdcolor p-5 rounded-2xl text-white font-light tracking-wide">
        {details.aboutText}
      </div>
    </Card>
  );
}
