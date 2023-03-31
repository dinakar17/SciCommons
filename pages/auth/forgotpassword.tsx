import AuthForm from "@/layouts/AuthForm";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Send verification email logic here
  };

  return (
    <>
      <AuthForm
        type="forgot"
        image="/images/forgotpassword.png"
        title="Forgot your Password?"
        description="No worries, enter your email here, we’ll send you reset instructions"
        buttonText="Send Reset Link"
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
      />
    </>
  );
}
