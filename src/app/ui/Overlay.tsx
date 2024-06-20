import "@/app/globals.css";
import Button from "./Button";
import { Dispatch, SetStateAction, useState } from "react";

interface OverlayProps {
  message?: string;
  display: () => void;
  children?: React.ReactNode;
}

const Overlay = (props: OverlayProps) => {
  return (
    <div className="py-4 text-left px-6">
      <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div className="absolute w-full h-full bg-gray-900 opacity-40 flex items-center justify-center" />
        <div className="container w-11/12 md:max-w-md mx-auto my-auto rounded-3xl bg-white shadow-lg z-50 overflow-y-auto">
          <div className="flex-row p-1 md:p-2 bg-bsCardBackgroundColor border-solid border-2 rounded-3xl">
            <div className="flex-row p-1 md:p-1 bg-bsCardChildrenBackgroundColor border-solid border rounded-3xl">
              <div className="py-4 text-left text-white px-6">
                {props.message}
              </div>
              {props.children && (
                <div className="py-4 text-left text-white px-6">
                  {props.children}
                </div>
              )}
              <div
                className="py-4 text-left text-white px-6"
                onClick={() => props.display()}
              >
                <Button textToDisplay="Close" click={() => {}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
