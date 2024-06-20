"use client";
import { sendEmail } from "@/app/lib/api/actions";
import { use, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import Button from "./Button";
import Overlay from "./Overlay";
import LoadingAnimation from "./LoadingAnimation";
import LoadingScreen from "./LoadingScreen";

interface State {
  error: string | null;
  success: boolean;
}

export default function Form() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [sending, setSending] = useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [sendMailState, setSendMailState] = useState<State>({
    error: null,
    success: false,
  });
  const sendEmailAction = async () => {
    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    const responseState = await sendEmail(sendMailState, formData);
    setSendMailState(responseState);
  };

  useEffect(() => {
    if (sendMailState.success) {
      setFeedbackMessage("Email sent!");
      setName("");
      setEmail("");
      setMessage("");
      setSending(!sending);
      handleShowFeedback();
    } else if (sendMailState.error) {
      setFeedbackMessage("Error sending email!");
      handleShowFeedback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendMailState]);

  const handleShowFeedback = () => {
    setShowFeedback(!showFeedback);
  };

  return (
    <form>
      {showFeedback && feedbackMessage && (
        <Overlay message={feedbackMessage} display={handleShowFeedback} />
      )}
      {sending && (
        <div className="py-4 text-left px-6">
          <div className="pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <LoadingAnimation color="beige" />
          </div>
        </div>
      )}
      <div
        className={`${
          sending ? "pointer-events-none" : ""
        } md:pl-36 md:pr-36 md:px-6 md:py-6 pl-2 pr-2 px-2 py-2 bg-sixthcolor rounded-xl shadow-md md:m-1 grid grid-cols-1 gap-2 rounded-2xl text-darkBlue decoration-wavy font-light tracking-wide`}
      >
        <div>
          <label className="pr-4" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <div
          onClick={() => {
            setSending(!sending);
            sendEmailAction();
          }}
        >
          <Button textToDisplay="Send" click={() => {}} />
        </div>
      </div>
    </form>
  );
}
