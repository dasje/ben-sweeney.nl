"use client";

import Card from "../../../ui/Card";
import details from "../../../lib/json/details";
import Experience from "@/app/ui/Experience";

export default function Page() {
  return (
    <Card title="Experience">
      <div className="bg-thirdcolor p-5 rounded-2xl text-white">
        <Experience experience={details.achievements.experience} />
      </div>
    </Card>
  );
}
