"use client";

import * as deets from "@/data/json/details.json";
import detailsInterface from "@/data/interfaces/detailsInterface";
import ProgressBarCollection from "@/app/ui/ProgressBarCollection";

export default function Page() {
  const details = deets as detailsInterface;
  return (
    <ProgressBarCollection
      collectionName="Skills"
      data={details.programmingLanguageSkills}
    />
  );
}
