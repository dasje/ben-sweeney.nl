"use client";

import Card from "@/app/ui/Card";
import * as deets from "@/data/json/details.json";
import detailsInterface from "@/data/interfaces/detailsInterface";
import Experience from "@/app/ui/Experience";
import Education from "@/app/ui/Education";

export default function Page() {
  const details = deets as detailsInterface;
  return (
    <>
      <Card title="Experience">
        <div className="bg-thirdcolor md:p-5 rounded-2xl text-white">
          <Experience experience={details.achievements.experience} />
        </div>
        <div className="bg-thirdcolor md:p-5 rounded-2xl text-white">
          <Experience experience={details.achievements.otherExperience} />
        </div>
      </Card>
      <Card title="Education">
        <div className="bg-thirdcolor md:p-5 rounded-2xl text-white">
          <Education experience={details.achievements.education} />
        </div>
        <div className="bg-thirdcolor md:p-5 rounded-2xl text-white">
          <Education experience={details.achievements.courses} />
        </div>
      </Card>
    </>
  );
}
