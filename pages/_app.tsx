import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import NextProgress from "next-progress";

import Layout from "@/layouts/Layout";
import "@/layouts/Navbar";
import "@/styles/globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function App({ Component, pageProps }: AppProps) {
  const excludeNavbarRoutes = ["/auth/login", "/auth/register"];
  // Todo: Add protected routes

  return (
    <>
      <main className={`${inter.variable} font-sans`}>
        <ThemeProvider defaultTheme="light" attribute="class">
        <NextProgress delay={200} color="#8922dd" options={{ showSpinner: false }}/>
          <Layout excludeNavbarRoutes={excludeNavbarRoutes}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </main>
    </>
  );
}
