import "@/app/globals.css";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { useState } from "react";
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

  const headerColors = [
    "bg-bsHeaderColorOne",
    "bg-bsHeaderColorTwo",
    "bg-bsHeaderColorThree",
    "bg-bsHeaderColorFour",
  ];

  const [previousLinks, setPreviousLinks] = useState<navDetail[]>([]);
  const [currentLinks, setCurrentLinks] = useState<navDetail | null>(
    sitemap.home
  );
  const [revealChildPages, setRevealChildPages] = useState<number | null>(null);

  const listBreadcrumbs = previousLinks.map((item, idx) => (
    <Link key={idx} href={previousLinks.slice(-idx)[0].pageUrl}>
      <Button
        focusButton={true}
        breadcrumb={true}
        click={() => {
          setCurrentLinks(previousLinks.slice(-idx)[0]);
          setPreviousLinks(previousLinks.slice(0, -idx));
        }}
        direction="backward"
        textToDisplay={previousLinks.slice(-idx)[0].pageName}
      />
    </Link>
  ));

  const listButtons = currentLinks?.children.map((item, idx) => (
    <div key={idx} className="group">
      <div
        className="place-content-center p-1 place-self-start"
        onMouseEnter={() => setRevealChildPages(idx)}
        onClick={() => setRevealChildPages(idx)}
      >
        <Link href={currentLinks.children[idx].pageUrl}>
          <Button
            textToDisplay={item.pageName}
            click={() => {
              !previousLinks.includes(currentLinks)
                ? setPreviousLinks([...previousLinks, currentLinks])
                : {};
              item.children.length > 0
                ? setCurrentLinks(currentLinks.children[idx])
                : {};
            }}
          />
        </Link>
      </div>
      {revealChildPages === idx &&
        currentLinks.children[idx].children.length > 0 && (
          <div className="hidden group-hover:contents">
            <div
              className={`absolute ${
                headerColors[previousLinks.length]
              } my-10 space-y-2 p-1 border-r border-l border-b border-dashed rounded-b-lg`}
            >
              {currentLinks.children[idx].children.map((i, k) => (
                <div key={k} className="place-content-center col-span-1">
                  <Link href={i.pageUrl}>
                    <Button
                      textToDisplay={i.pageName}
                      click={() => {
                        // console.log(item);
                        setPreviousLinks([
                          ...previousLinks,
                          currentLinks,
                          currentLinks.children[idx],
                        ]);
                        i.children.length > 0
                          ? setCurrentLinks(i)
                          : setCurrentLinks(currentLinks.children[idx]);
                      }}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
    </div>
  ));
  return (
    <div
      className={`z-50 flex-row p-4 w-11/12 md:w-10/12 ${
        headerColors[previousLinks.length]
      } border-solid border-2 rounded-3xl m-4`}
    >
      <Link href={"/"}>
        <div
          className="font-bold text-center text-fourthcolor tracking-wider text-3xl p-1 pb-2"
          onClick={() => {
            setCurrentLinks(sitemap.home);
            setPreviousLinks([]);
          }}
        >
          <h1 className="hover:animate-pulse">{pt}</h1>
        </div>
      </Link>
      {props.subtitle && (
        <div className="font-bold text-center text-fourthcolor tracking-wider text-xl p-1">
          <h2>{props.subtitle}</h2>
        </div>
      )}
      <div className="flex md:justify-center space-x-1 overflow-x-auto -webkit-overflow-scrolling: auto; touch-auto scrolling-touch">
        {previousLinks && listBreadcrumbs}
        {currentLinks && listButtons}
      </div>
      {props.children && <div>{props.children}</div>}
    </div>
  );
};

export default Header;
