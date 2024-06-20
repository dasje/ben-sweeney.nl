import React from "react";
import "@/app/globals.css";

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
    forward: ">",
    backward: "<",
    upward: "Up",
    downward: "Down",
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
          </div>
        )}

        {}
      </div>
      {props.direction && (
        <div
          className={`${
            props.textColor ? fontColor[props.textColor] : "text-white"
          } pl-2 pb-1 pt-2`}
        >
          {directionIcon[props.direction]}
        </div>
      )}
    </div>
  );
};

export default Button;
