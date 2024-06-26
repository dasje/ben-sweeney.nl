"use client";

import Card from "@/app/ui/Card";
import * as deets from "@/data/json/details.json";
import detailsInterface from "@/data/interfaces/detailsInterface";
import profilePic from "@/app/lib/images/profilepic.jpg";
import Image from "next/image";

export default function Page() {
  const details = deets as detailsInterface;
  return (
    <Card title="About">
      <div className="bg-thirdcolor p-5 rounded-2xl text-white decoration-wavy font-light tracking-wide grid grid-cols-3 space-y-4">
        <div className="flex col-span-3 md:col-span-1 h-full w-full justify-center items-center">
          <Image
            className="rounded-full rounded-full ring-2 md:ring-8 ring-darkOrange"
            style={{ width: "50%", height: "auto" }}
            // width="200"
            // height="200"
            src={profilePic}
            alt="profile pic"
            placeholder="blur"
          />
        </div>
        <div className="col-span-3 md:col-span-2 w-4/5">
          {details.aboutText}
        </div>
      </div>
    </Card>
  );
}
