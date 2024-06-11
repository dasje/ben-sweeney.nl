"use client";

import Card from "../../../ui/Card";
import details from "../../../lib/json/details";
import Experience from "@/app/ui/Experience";
import Education from "@/app/ui/Education";
import Container from "@/app/ui/Container";

export default function Page() {
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
