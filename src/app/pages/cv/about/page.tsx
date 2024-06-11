"use client";

import Card from "../../../ui/Card";
import details from "../../../lib/json/details";

export default function Page() {
  return (
    <Card title="About">
      <div className="bg-thirdcolor p-5 rounded-2xl text-white font-light tracking-wide">
        {details.aboutText}
      </div>
    </Card>
  );
}
