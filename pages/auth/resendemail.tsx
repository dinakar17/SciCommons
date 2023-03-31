import { Input } from "@/components/UI/Input";
import AuthForm from "@/layouts/AuthForm";
import Image from "next/image";
import { useState } from "react";

export default function ResendEmail() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Send verification email logic here
  };

  return (
    <>
      <AuthForm
        type="resend"
        image="/images/resendemail.png"
        title="Complete Your Registration"
        description="A verification link will be sent to your email address"
        buttonText="Resend verification email"
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
      />
    </>
  );
}
