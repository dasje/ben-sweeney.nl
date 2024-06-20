import { Html, Heading, Text } from "@react-email/components";
import Card from "./Card";
const EmailTemplate = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  return (
    <Html lang="en">
      <div>Contact Form</div>
      <div className="flex-row p-1 md:p-4 bg-blue-300 border-solid border rounded-xl">
        <Text>You just submitted a form. Here are the details:</Text>
        <Text>Name: {name}</Text>
        <Text>Email: {email}</Text>
        <Text>Message: {message}</Text>
      </div>
    </Html>
  );
};
export default EmailTemplate;
