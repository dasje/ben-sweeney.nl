import { useState } from "react";
import { Progress } from "@material-tailwind/react";
import type { ProgressStylesType } from "@material-tailwind/react";
import Card from "./Card";

interface ProgessBarsProps {
  skillName: string;
  progressPercentage: number;
}

const ProgressBar = ({ skillName, progressPercentage }: ProgessBarsProps) => {
  return (
    <div className="h-4 grid grid-cols p-4 bg-sixthcolor rounded-full content-center">
      <div className="h-5 w-full bg-white rounded-full self-center">
        <div
          style={{ width: `${progressPercentage}%` }}
          className={`h-full rounded-full ${
            progressPercentage < 70 ? "bg-red-600" : "bg-green-600"
          }`}
        >
          <div className="grid grid-cols-2 gap-4 text-black md:text-white font-semibold">
            <div className="md:place-self-start pl-2">{skillName}</div>
            <div className="md:place-self-end pr-4">{progressPercentage}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;