import React, { useState } from 'react';
import Image from 'next/image';
import { Input, validateEmail} from '@/components/UI/Input';
import Link from 'next/link';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col md:flex-row h-screen dark:bg-gray-900">
      {/* Left side */}
      <div className="flex flex-col h-full justify-center p-8 md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">Good to See You Again!</h1>
        <p className="text-gray-600 mb-8 dark:text-gray-400">
          Join a vibrant community of researchers, share your latest work, and
          receive valuable feedback. Log in now to start rating and commenting
          on scientific articles, and take your research to the next level.
        </p>
        <form>
        <Input label="Email" placeholder="johndoe@example.com" type="email" value={email} setValue={setEmail} validate={validateEmail}/>
        <Input label="Password" placeholder="********" type="password" value={password} setValue={setPassword}/>
        {/* Remember me and forgot password */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <input
              id="remember_me"
              type="checkbox"
              className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
            />
            <label
              htmlFor="remember_me"
              className="ml-2 block text-sm text-gray-900 dark:text-gray-400"
            >
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <Link href="/auth/forgotpassword" className="font-medium text-blue-500 hover:text-blue-400">
              Forgot your password?
            </Link>
          </div>
        </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log In
          </button>
        </form>
        <div className="mt-4">
          <p className="text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?{' '}
            <Link href="/auth/register" className="text-blue-500">
              Sign up for free
            </Link>
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Didn&apos;t receive signup email?{' '}
            <Link href="/auth/resendemail" className="text-blue-500">
              Resend Sign up email
            </Link>
          </p>
        </div>
      </div>
      {/* Right side */}
      <div className="md:w-1/2 h-full bg-cover bg-center relative hidden md:block">
        <Image
          src="/images/login.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute hidden inset-0 md:flex items-end justify-center mb-12">
          <div className="bg-white bg-opacity-[0.25] backdrop-blur-sm rounded-xl p-2 md:p-6 shadow-lg max-w-md">
            <p className="text-sm md:text-base lg:text-lg font-medium text-gray-800">
            &quot;When something is important enough, you do it even if the odds
              are not in your favor.&quot;- Elon Musk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
