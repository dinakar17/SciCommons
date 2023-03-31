import AuthForm from "@/layouts/AuthForm";
import { useState } from "react";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Send verification email logic here
  };

  return (
    <>
      <AuthForm
        type="reset"
        image="/images/resetpassword.png"
        title="Reset your Password"
        buttonText="Reset Password"
        handleSubmit={handleSubmit}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
      />
    </>
  );
}
