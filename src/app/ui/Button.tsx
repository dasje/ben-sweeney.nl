import React from "react";
import "@/app/globals.css";

interface ButtonProps {
  textToDisplay: string;
  buttonColor?: "first" | "second" | "third" | "fourth" | "fifth" | "sixth";
  textColor?: "white" | "black";
  focusButton?: boolean;
  click: () => {} | void;
}
const Button = (props: ButtonProps) => {
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
    <div
      className={`${
        props.buttonColor ? background[props.buttonColor] : "bg-fifthcolor"
      } border-solid ${
        props.focusButton ? "border-2 mix-blend-screen" : "border"
      } rounded-full m-2.5 hover:animate-pulse hover:bg-bsButtonHoverColor`}
      onClick={props.click}
    >
      <div
        className={`font-semibold text-center ${
          props.textColor ? fontColor[props.textColor] : "text-white"
        } tracking-wider pl-5 pb-1 pr-5 pt-1`}
      >
        {props.textToDisplay}
      </div>
    </div>
  );
};

export default Button;
