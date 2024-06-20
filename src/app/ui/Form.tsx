"use client";
import { sendEmail } from "@/app/lib/api/actions";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import Button from "./Button";
export default function Form() {
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false,
  });
  useEffect(() => {
    if (sendEmailState.success) {
      alert("Email sent!");
    }
    if (sendEmailState.error) {
      alert("Error sending email!");
    }
  }, [sendEmailState]);
  return (
    <form action={sendEmailAction}>
      <div className="md:pl-36 md:pr-36 md:px-6 md:py-6 pl-2 pr-2 px-2 py-2 bg-sixthcolor rounded-xl shadow-md md:m-1 grid grid-cols-1 gap-2 rounded-2xl text-darkBlue decoration-wavy font-light tracking-wide">
        <div>
          <label className="pr-4" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div>
          <label className="pr-4" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            name="email"
          />
        </div>
        <label className="pr-4" htmlFor="message">
          Message
        </label>
        <textarea
          className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="message"
          id="message"
          cols={30}
          rows={10}
        ></textarea>

        <button type="submit">
          <Button textToDisplay="Send" click={() => {}} />
        </button>
      </div>
    </form>
  );
}
