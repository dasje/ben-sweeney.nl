import "@/app/globals.css";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as sitemapDetails from "@/data/json/sitemap.json";
import sitemapInterface from "@/data/interfaces/sitemapInterface";

type navDetail = { pageName: string; pageUrl: string; children: navDetail[] };

interface HeaderProps {
  pageTitle: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  const sitemap = sitemapDetails as sitemapInterface;
  const [pt, setPt] = useState<string>(props.pageTitle);
  const [currentLinks, setCurrentLinks] = useState<navDetail[]>(
    sitemap.home.children
  );
  const listButtons = currentLinks.map((item, idx) => (
    <div className="place-content-center" key={idx}>
      <Link href={item.pageUrl}>
        <Button
          textToDisplay={item.pageName}
          click={() => {
            item.children.length > 0 ? setCurrentLinks(item.children) : {};
          }}
        />
      </Link>
    </div>
  ));
  return (
    <div className="z-50 flex-row p-4 w-11/12 md:w-10/12 bg-bsCardBackgroundColor border-solid border-8 rounded-3xl m-4">
      <Link href={"/"}>
        <div
          className="font-bold text-center text-fourthcolor tracking-wider text-3xl p-1 pb-2"
          onClick={() => setCurrentLinks(sitemap.home.children)}
        >
          <h1
            onMouseOver={() => setPt("Home")}
            onMouseLeave={() => setPt(props.pageTitle)}
          >
            {pt}
          </h1>
        </div>
      </Link>
      {props.subtitle && (
        <div className="font-bold text-center text-fourthcolor tracking-wider text-xl p-1">
          <h2>{props.subtitle}</h2>
        </div>
      )}
      <div className="flex md:justify-center space-x-4 overflow-x-auto -webkit-overflow-scrolling: auto; -webkit-overflow-scrolling: auto;">
        <Link href={"/"}>
          <Button
            textToDisplay="Home"
            click={() => setCurrentLinks(sitemap.home.children)}
          />
        </Link>
        {listButtons}
      </div>

      {props.children && <div>{props.children}</div>}
    </div>
  );
};

export default Header;
