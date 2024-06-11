import "@/app/globals.css";
import { title } from "process";
import React from "react";

interface CardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div className="flex-row p-1 md:p-4 bg-bsCardBackgroundColor border-solid border-8 rounded-3xl md:w-9/12">
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

export default Card;
