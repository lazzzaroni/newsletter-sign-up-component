import { useState } from "react";
import { type SubmitHandler } from "react-hook-form";

import Form, { type Mail } from "./Form";
import Success from "./Success";

export default function Container() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState("");

  const handleFormSubmit: SubmitHandler<Mail> = ({ mail }) => {
    setData(mail);
    setIsSubmitted(true);
  };

  const handleSuccessSubmit = () => {
    setData("");
    setIsSubmitted(false);
  };

  return (
    <>
      {!isSubmitted ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <Success email={data} onClick={handleSuccessSubmit} />
      )}
    </>
  );
}
