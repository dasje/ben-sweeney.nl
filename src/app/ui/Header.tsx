import "@/app/globals.css";
import { title } from "process";
import React from "react";
import Button from "./Button";

interface HeaderProps {
  pageTitle: string;
  subtitle?: string;
  links: {
    pageName: string;
    pageUrl: string;
  }[];
  children?: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  const listButtons = props.links.map((item, idx) => (
    <div className="place-content-center" key={idx}>
      <Button textToDisplay={item.pageName} click={() => {}} />
    </div>
  ));
  return (
    <div className="flex-row p-4 w-4/5 bg-bsCardBackgroundColor border-solid border-8 rounded-3xl m-4">
      <div className="font-bold text-center text-fourthcolor tracking-wider text-3xl p-1">
        <h1>{props.pageTitle}</h1>
      </div>
      {props.subtitle && (
        <div className="font-bold text-center text-fourthcolor tracking-wider text-xl p-1">
          <h2>{props.subtitle}</h2>
        </div>
      )}
      <div className="flex justify-center space-x-4">{listButtons}</div>

      {props.children && <div>{props.children}</div>}
    </div>
  );
};

export default Header;
