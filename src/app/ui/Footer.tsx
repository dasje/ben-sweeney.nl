import * as deets from "@/data/json/details.json";
import detailsInterface from "@/data/interfaces/detailsInterface";
import Image from "next/image";
import Link from "next/link";
import githubLogo from "../lib/icons/icons8-github-50.png";
import linkedInLogo from "../lib/icons/icons8-linkedin-50.png";

const Footer = () => {
  const details = deets as detailsInterface;
  return (
    <div className="flex flex-col p-2 bg-bsCardBackgroundColor md:w-3/5 border-solid border-8 rounded-3xl m-4 text-white">
      <div className="text-center">{details.contact.email}</div>
      <div className="flex flex-row">
        <div className="basis-full md:basis-1/2 w-2/5 m-4 content-center">
          <div className="text-right">
            {details.contact.street} {details.contact.number}
          </div>
          <div className="text-right">
            {details.contact.postcode} {details.contact.city}
          </div>
          <div className="text-right">{details.contact.country}</div>
        </div>
        <div className="basis-full md:basis-1/2 w-2/5 m-4 content-center">
          <Link href={details.contact.github}>
            <Image alt="GitHub Logo" src={githubLogo} />
          </Link>
          <Link href={details.contact.linkedin}>
            <Image alt="LinkedIn Logo" src={linkedInLogo} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
