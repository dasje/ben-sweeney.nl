import Image from "next/image";
import { useState } from "react";
import downArrow from "@/app/lib/icons/icons8-down-arrow-100.png";
import Link from "next/link";

export interface ExperienceRackProps {
  instituteName: string;
  years: string;
  role: string;
  tools: string;
  description: string[];
}

const ExperienceRack = ({
  instituteName,
  years,
  role,
  tools,
  description,
}: ExperienceRackProps) => {
  const [revealDescription, setRevealDescription] = useState<boolean>(false);

  return (
    <div className="grid gird-cols-1 md:grid-cols-3 bg-secondcolor border-solid border-8 rounded-xl px-5 py-5 md:pt-2 pb-2.5">
      <div className="col-span-2 font-semibold text-lg text-left md:text-white text-thirdcolor tracking-wide">
        <div>{instituteName}</div>
        <div className="font-light text-left text-white tracking-wide">
          <div
            className={`${
              description.length === 0 && "hidden"
            } hover:animate-pulse content-center`}
            onMouseDown={() => setRevealDescription(!revealDescription)}
          >
            <Image
              //   style={{ rotate: "180deg" }}
              className={`${revealDescription && "rotate-180"}`}
              width={40}
              height={40}
              src={downArrow}
              alt="down arrow"
            />
          </div>
          <div className="space-y-2">
            {revealDescription &&
              description.map((v, k) => {
                return (
                  <div key={k} className={`${k !== 0 && "indent-4"}`}>
                    {v}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="col-span-2 md:col-span-1 font-light text-right text-white tracking-wide">
        <div>{role}</div>
        <div>{years}</div>
        <div>{tools}</div>
      </div>
    </div>
  );
};

export default ExperienceRack;
