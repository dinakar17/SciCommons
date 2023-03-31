import {
  Input,
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  validateUsername,
} from "@/components/UI/Input";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
  };

  // Validation for each input so we can enable/disable the submit button
  const [errors, setErrors] = useState<string[]>([])

  const handleValidation = () => {
    const validationErrors: string[] = []
    if (validateEmail) {
      const emailError = validateEmail(email)
      if (emailError) {
        validationErrors.push(emailError)
      }
    }
    if (validateUsername) {
      const usernameError = validateUsername(username)
      if (usernameError) {
        validationErrors.push(usernameError)
      }
    }
    if (validatePassword) {
      const passwordError = validatePassword(password)
      if (passwordError) {
        validationErrors.push(passwordError)
      }
    }
    if (validateConfirmPassword) {
      const confirmPasswordError = validateConfirmPassword(confirmPassword, password)
      if (confirmPasswordError) {
        validationErrors.push(confirmPasswordError)
      }
    }
    setErrors(validationErrors)
  }

  useEffect(() => {
    handleValidation()
  }, [email, username, password, confirmPassword])

  const isDisabled = errors.length > 0

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side */}
      <div className="relative md:w-1/2">
        <Image
          src="/images/register.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute hidden inset-0 md:flex items-center justify-center">
          <div className="bg-white bg-opacity-[0.25] backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg max-w-md">
            <p className="text-base md:text-lg lg:text-xl font-medium text-gray-800">
              Join a global community of researchers and enthusiasts, united by
              a shared passion for scientific discovery. Connect with peers,
              share your insights, and unlock the power of collective knowledge.
              Together, we can build a better future.
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="bg-white dark:bg-gray-800 px-8 py-12 md:p-12 md:w-1/2 flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Join the Science Revolution
        </h1>
        <p className="text-gray-800 dark:text-gray-300 mb-8">
          Sign up to access an online hub of research papers, comments, and
          ratings, and engage with a global community of researchers.
        </p>

        <form className="flex flex-col">
          <Input label="Username" placeholder="johndoe" type="text" value={username} setValue={setUsername} validate={validateUsername}/>
          <Input label="Email" placeholder="johndoe@example.com" type="email" value={email} setValue={setEmail} validate={validateEmail}/>
          <Input label="Password" placeholder="********" type="password" value={password} setValue={setPassword} validate={validatePassword}/>
          <Input label="Confirm Password" placeholder="********" type="password" value={confirmPassword} setValue={setConfirmPassword} validate={(value) => validateConfirmPassword(value, password)}/>
          <button type="submit" disabled={isDisabled} className={`bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
        Register
      </button>

        </form>

        <p className="text-gray-800 dark:text-gray-300 mt-8">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
