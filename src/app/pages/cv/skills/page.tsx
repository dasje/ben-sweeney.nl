"use client";

import Card from "../../../ui/Card";
import details from "../../../lib/json/details";
import ProgressBarCollection from "@/app/ui/ProgressBarCollection";

export default function Page() {
  return (
    <ProgressBarCollection
      collectionName="Skills"
      data={details.programmingLanguageSkills}
    />
  );
}
