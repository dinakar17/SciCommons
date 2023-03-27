import "@/styles/globals.css";
import "@/components/Navbar";
import Navbar from "@/components/Navbar";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
}
