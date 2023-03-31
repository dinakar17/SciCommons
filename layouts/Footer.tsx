import React from "react";
import Link from "next/link";
import {
  AnnotationIcon,
  ArchiveIcon,
  ArrowDownIcon,
  ArrowRightIcon,
} from "@heroicons/react/solid";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Articles", path: "/articles" },
  { name: "Communities", path: "/communities" },
  { name: "About", path: "/about" },
  { name: "Login", path: "/auth/login" },
  { name: "Register", path: "/auth/register" },
];


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 mx-3"
            >
              <span className="sr-only">Facebook</span>
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 mx-3"
            >
              <span className="sr-only">Youtube</span>
              <i className="fab fa-youtube text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 mx-3"
            >
              <span className="sr-only">Instagram</span>
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 mx-3"
            >
              <span className="sr-only">Twitter</span>
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="flex flex-wrap text-center text-base leading-6 text-gray-400 dark:text-gray-500">
              {
                navLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <Link href={link.path} className="hover:underline">
                      {link.name}
                    </Link>
                    {index !== navLinks.length - 1 && (
                      <span className="mx-4 text-gray-400 dark:text-gray-500">|</span>
                    )}
                  </React.Fragment>
                ))
              }
            </p>
            <p className="text-center text-base leading-6 text-gray-400 dark:text-gray-500 mt-2">
              <span className="inline-block">
                © 2023 SciCommons. All rights reserved.
              </span>
              <span className="mx-4 text-gray-400 dark:text-gray-500">|</span>
              <a href="#" className="hover:underline">
                Terms and Conditions
              </a>
              <span className="mx-4 text-gray-400 dark:text-gray-500">|</span>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
