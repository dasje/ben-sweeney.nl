import "@/app/globals.css";
import Button from "./Button";
import Link from "next/link";
import { useEffect, useState } from "react";

type navDetail = { pageName: string; pageUrl: string; children: navDetail[] };

interface HeaderProps {
  pageTitle: string;
  subtitle?: string;
  homeLink?: string;
  sitemap: navDetail;
  children?: React.ReactNode;
}

const Header = ({
  pageTitle,
  subtitle,
  homeLink,
  sitemap,
  children,
}: HeaderProps) => {
  const [revealChildPages, setRevealChildPages] = useState<number | null>(null);
  const [revealGrandchildPages, setRevealGrandchildPages] = useState<
    number | null
  >(null);

  const handleChildButtons = (newKey: number | null) => {
    setRevealChildPages(newKey);
  };
  const handleGrandchildrenButtons = (newKey: number | null) => {
    setRevealGrandchildPages(newKey);
  };

  const listButtons = () => {
    return sitemap?.children.map((item, idx) => (
      <div
        key={idx}
        className="group flex grid md:grid-cols-1 place-self-center"
        onMouseEnter={() => {
          handleChildButtons(idx);
        }}
        onMouseLeave={() => {
          handleChildButtons(null);
          handleGrandchildrenButtons(null);
        }}
      >
        <div
          className="p-1 md:col-span-1"
          onTouchStart={() => {
            revealChildPages === null
              ? handleChildButtons(idx)
              : handleChildButtons(null);
          }}
        >
          {item.children.length == 0 ? (
            <Link href={item.pageUrl}>
              <Button
                textToDisplay={item.pageName}
                click={() => {
                  handleChildButtons(null);
                  handleGrandchildrenButtons(null);
                }}
              />
            </Link>
          ) : (
            <Button textToDisplay={item.pageName} click={() => {}} />
          )}
        </div>
        {revealChildPages === idx && item.children.length > 0 && (
          <div className="md:col-span-1 contents bg-darkBlue relative">
            <div
              className={`absolute ${"bg-darkBlue"} my-10 space-y-2 p-1 border-r border-l border-b border-dashed rounded-b-lg`}
            >
              {item.children.map((i, k) => (
                <div key={k}>
                  <div
                    className="place-content-center col-span-1"
                    onMouseEnter={() => {
                      handleGrandchildrenButtons(k);
                    }}
                    onTouchStartCapture={() => {
                      handleGrandchildrenButtons(k);
                    }}
                  >
                    <Link href={i.pageUrl}>
                      <Button
                        textToDisplay={
                          i.children.length === 0 ? i.pageName : `${i.pageName}`
                        }
                        click={() => {
                          i.children.length === 0 && handleChildButtons(null);
                          i.children.length === 0 &&
                            handleGrandchildrenButtons(null);
                        }}
                        direction={
                          i.children.length === 0 ? undefined : "downward"
                        }
                      />
                    </Link>
                  </div>
                  {revealGrandchildPages === k &&
                    i.children.map((j, key) => (
                      <div key={key} className="mt-2">
                        <Link href={j.pageUrl}>
                          <Button
                            textToDisplay={j.pageName}
                            buttonColor="second"
                            click={() => {
                              j.children.length === 0 &&
                                handleChildButtons(null);
                              j.children.length === 0 &&
                                handleGrandchildrenButtons(null);
                            }}
                          />
                        </Link>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div
      className={`md:relative z-50 flex-row p-4 w-11/12 md:w-10/12 bg-darkBlue border-solid border-2 rounded-3xl m-4`}
    >
      <Link href={homeLink ? homeLink : "/"}>
        <div
          className="font-bold text-center text-midOrange tracking-wider text-3xl p-1 pb-2"
          onClick={() => {}}
        >
          <h1 className="hover:animate-pulse">{pageTitle}</h1>
        </div>
      </Link>
      {subtitle && (
        <div className="font-bold text-center text-fourthcolor tracking-wider text-xl p-1">
          <h2>{subtitle}</h2>
        </div>
      )}
      <div className="flex md:justify-center space-x-1 overflow-x-auto -webkit-overflow-scrolling: auto; touch-auto scrolling-touch md:place-content-center">
        {sitemap && listButtons()}
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};

export default Header;
