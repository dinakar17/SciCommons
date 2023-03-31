// Re stands for either reset or resend
import { Input, validateConfirmPassword, validatePassword } from "@/components/UI/Input";
import Image from "next/image";
import Link from "next/link";

interface Props {
  type: "reset" | "resend" | "forgot";
  title: string;
  description?: string;
  buttonText: string;
  image: string;
  email?: string | undefined;
  setEmail?: (email: string) => void;
  password?: string;
  setPassword?: (password: string) => void;
  confirmPassword?: string;
  setConfirmPassword?: (confirmPassword: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function AuthForm(props: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md dark:bg-gray-900">
        <div className="mb-6 text-center">
          <div className="flex justify-center items-center">
            <Image src={props.image} alt="logo" width={80} height={80} />
          </div>
          <h1 className="text-2xl font-bold mt-4">{props.title}</h1>
          {props.type !== "reset" && (
            <p className="text-gray-500 mt-2 dark:text-gray-400">
                {props.description}
            </p>
          )}
        </div>
        <form onSubmit={props.handleSubmit}>
          {props.type !== "reset" ? (
            <Input
              label="Email"

              placeholder="Enter your email"
              type="email"
              value={props.email as string}
              setValue={props.setEmail}
            />
          ) : (
            <>
              <Input
                label="Password"
                placeholder="Enter your password"
                type="password"
                value={props.password as string}
                setValue={props.setPassword}
                validate={validatePassword}
              />
              <Input
                label="Confirm Password"
                placeholder="Confirm your password"
                type="password"
                value={props.confirmPassword as string}
                setValue={props.setConfirmPassword}
                validate={(value) => validateConfirmPassword(value, props.password as string)}
              />
            </>
          )}
          <div className="mt-6 flex flex-col gap-4 justify-between items-center">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-600"
            >
              {props.buttonText}
            </button>
            {props.type !== "reset" && (
              <Link
                href="/auth/login"
                className="flex items-center justify-center text-blue-500 hover:text-blue-600 font-bold dark:text-blue-400 dark:hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Sign in
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
