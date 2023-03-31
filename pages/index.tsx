import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen justify-center items-center">
        <h1 className="text-3xl font-bold underline">Welcome to SciCommons Home Page!</h1>
      </div>
    </>
  );
}
