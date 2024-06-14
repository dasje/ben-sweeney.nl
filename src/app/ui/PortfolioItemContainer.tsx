import "@/app/globals.css";
import React from "react";

interface PortfolioItemContainerProper {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const PortfolioItemContainer = (props: PortfolioItemContainerProper) => {
  return (
    <div className="flex-col p-1 md:m-4 md:p-4 bg-bsCardBackgroundColor border-solid border-8 rounded-3xl">
      {props.title && (
        <div className="font-bold text-center text-fourthcolor tracking-wider text-3xl p-1">
          <h1>{props.title}</h1>
        </div>
      )}
      {props.subtitle && (
        <div className="font-bold text-center text-fourthcolor tracking-wider text-xl p-1">
          <h2>{props.subtitle}</h2>
        </div>
      )}
      <div className="flex-row p-1 md:p-4 bg-bsCardChildrenBackgroundColor border-solid border-2 rounded-xl">
        {props.children && <div className="space-y-4">{props.children}</div>}
      </div>
    </div>
  );
};

export default PortfolioItemContainer;
