import React from "react";
import "@/app/globals.css";

interface ButtonProps {
  textToDisplay: string;
  click: () => {} | void;
}
const Button = ({ textToDisplay, click }: ButtonProps) => {
  return (
    <div
      className="bg-fifthcolor border-solid border-4 rounded-full m-2.5 hover:animate-pulse hover:bg-bsButtonHoverColor"
      onClick={click}
    >
      <div className="font-semibold text-center text-white tracking-wider pl-5 pb-1 pr-5 pt-1">
        {textToDisplay}
      </div>
    </div>
  );
};

export default Button;
