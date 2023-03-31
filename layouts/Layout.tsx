import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
  excludeNavbarRoutes?: string[];
};

const Layout: React.FC<Props> = ({ children, excludeNavbarRoutes }) => {
  const router = useRouter();

  const isNavbarExcluded = excludeNavbarRoutes?.includes(router.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!isNavbarExcluded && <Navbar />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
