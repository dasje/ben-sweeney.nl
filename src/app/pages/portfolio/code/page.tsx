import Card from "../../../ui/Card";
import * as portfolio from "@/data/json/portfolioDetails.json";
import portfolioDetailsInterface from "@/data/interfaces/portfolioDetailsInterface";
import PortfolioItemContainer from "@/app/ui/PortfolioItemContainer";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const portfolioDetails = portfolio as portfolioDetailsInterface;
  const listProjects = portfolioDetails.code.projects.map((item, idx) => (
    <PortfolioItemContainer key={idx} title={item.projectName}>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 justify-items-center">
        <div className="col-span-1 md:col-span-1 md:contents hidden">
          <Image
            style={{ width: "50%", height: "auto" }}
            width="100"
            height="100"
            src={item.image}
            alt=""
          />
        </div>
        <div className="col-span-1 md:col-span-4 md:pt-8">
          {item.description}
        </div>
        <div className="col-span-1 justify-self-start md:justify-self-center">
          Check out the project{" "}
          <Link
            href={item.link}
            rel="noopener noreferrer"
            target="_blank"
            className="font-semibold underline"
          >
            here
          </Link>
          .
        </div>
        <div className="col-span-1 justify-self-start">
          <ul className="list-disc list-inside">
            {item.tech.map((i, k) => (
              <li key={k}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
    </PortfolioItemContainer>
  ));

  return (
    <>
      <Card title="Code">
        <div className="flex-row p-1 md:p-4 bg-bsCardChildrenBackgroundColor border-solid border-2 rounded-xl">
          <div className="md:grid md:grid-cols-1 bg-secondcolor p-2 rounded-2xl text-white font-light tracking-wide">
            {portfolioDetails.code.codeOverview}
          </div>
        </div>
        <div className="md:grid md:grid-cols-1 bg-thirdcolor p-2 rounded-2xl text-white font-light tracking-wide space-y-4">
          {listProjects}
        </div>
      </Card>
    </>
  );
}
