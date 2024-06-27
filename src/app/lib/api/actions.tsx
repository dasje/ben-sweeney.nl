"use server";
import { Resend } from "resend";
import EmailTemplate from "@/app/ui/EmailTemplate";
import { render } from "@react-email/render";

interface State {
  error: string | null;
  success: boolean;
}
export const sendEmail = async (prevState: State, formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: `${process.env.EMAIL_NAME} <${process.env.EMAIL}>`,
      to: email,
      subject: "Form Submission",
      html: render(EmailTemplate({ name, email, message })),
    });
  } catch (error) {
    console.log(error);
    return {
      error: (error as Error).message,
      success: false,
    };
  }
  try {
    await resend.emails.send({
      from: `${process.env.EMAIL_NAME} <${process.env.EMAIL}>`,
      to: `${process.env.FORWARD_EMAIL}`,
      subject: "Form Submission",
      html: render(EmailTemplate({ name, email, message })),
    });
    return {
      error: null,
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: (error as Error).message,
      success: false,
    };
  }
};
