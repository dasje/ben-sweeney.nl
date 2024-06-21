import React from "react";
import "@/app/globals.css";
import forwardIcon from "@/app/lib/icons/icons8-right-arrow-100.png";
import backwardIcon from "@/app/lib/icons/icons8-left-arrow-80.png";
import upwardIcon from "@/app/lib/icons/icons8-chevron-up-100.png";
import downwardIcon from "@/app/lib/icons/icons8-down-arrow-100.png";
import Image from "next/image";

interface ButtonProps {
  textToDisplay?: string;
  buttonColor?: "first" | "second" | "third" | "fourth" | "fifth" | "sixth";
  textColor?: "white" | "black";
  focusButton?: boolean;
  direction?: "forward" | "backward" | "upward" | "downward";
  breadcrumb?: boolean;
  click: () => {} | void;
}
const Button = (props: ButtonProps) => {
  const directionIcon = {
    forward: forwardIcon,
    backward: backwardIcon,
    upward: upwardIcon,
    downward: downwardIcon,
  };
  const fontColor = {
    white: "text-white",
    black: "text-black",
  };
  const background = {
    first: "bg-firstcolor",
    second: "bg-secondcolor",
    third: "bg-thirdcolor",
    fourth: "bg-fourthcolor",
    fifth: "bg-fifthcolor",
    sixth: "bg-sixthcolor",
  };
  return (
    <div className="flex">
      <div
        className={`${
          props.buttonColor ? background[props.buttonColor] : "bg-fifthcolor"
        } border-solid ${
          props.focusButton === true ? "border-2 mix-blend-screen" : "border"
        } rounded-full m-2.5 w-36 hover:animate-pulse hover:bg-bsButtonHoverColor flex justify-center`}
        onClick={props.click}
      >
        {props.textToDisplay && (
          <div
            className={`font-semibold text-center ${
              props.textColor ? fontColor[props.textColor] : "text-white"
            } tracking-wider pl-5 pb-1 pr-5 pt-1`}
          >
            {props.textToDisplay}
            {props.direction && (
              <Image
                className="ml-2"
                src={directionIcon[props.direction]}
                alt="direction"
                height={10}
                width={10}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Button;
