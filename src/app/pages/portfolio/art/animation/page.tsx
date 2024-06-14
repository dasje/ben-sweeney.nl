import Container from "@/app/ui/Container";
import Card from "../../../../ui/Card";
import * as portfolio from "@/data/json/portfolioDetails.json";
import portfolioDetailsInterface from "@/data/interfaces/portfolioDetailsInterface";
import PortfolioItemContainer from "@/app/ui/PortfolioItemContainer";

export default function Page() {
  const portfolioDetails = portfolio as portfolioDetailsInterface;
  const embedYoutube = (link: string) => {
    return (
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          width="560"
          height="315"
          src={link}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    );
  };
  const listAnimations = portfolioDetails.animation.projects.map(
    (item, idx) => (
      <PortfolioItemContainer key={idx} title={item.itemName}>
        {embedYoutube(item.link)}
        <div>{item.description}</div>
      </PortfolioItemContainer>
    )
  );

  return (
    <>
      <Card title="Animations">
        <div className="flex-row p-1 md:p-4 bg-bsCardChildrenBackgroundColor border-solid border-2 rounded-xl">
          <div className="md:grid md:grid-cols-1 bg-secondcolor p-2 rounded-2xl text-white font-light tracking-wide">
            {portfolioDetails.animation.animationOverview}
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 bg-thirdcolor p-2 rounded-2xl text-white font-light tracking-wide space-y-4">
          {listAnimations}
        </div>
      </Card>
    </>
  );
}
