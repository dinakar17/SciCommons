import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import { useRouter } from "next/router";
import ToggleSwitch from "@/components/UI/ToggleSwitch";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Articles", path: "/articles" },
  { name: "Communities", path: "/communities" },
  { name: "About", path: "/about" },
];

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const menuItems = [
    "Profile",
    "Contributions",
    "Notifications",
    "Publish",
    "Sign Out",
  ];
  const activeClass = "text-purple-700 border-b-2 border-purple-700";

  return (
    <nav className="bg-white dark:bg-black shadow dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side */}
          <div className="flex-shrink-0">
            <img className="h-20 w-24" src="/images/logo.png" alt="Logo" />
          </div>

          {/* Center */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-1 text-sm font-medium text-gray-700 dark:text-white hover:text-gray-900 transition-all duration-300 ${
                    router.pathname === link.path ? activeClass : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {/* <div
                className={`h-1 w-20 bg-blue-500 mt-1 transition-all duration-200 ease-in-out ${
                  selectedTab === "Home" ? "ml-0" : ""
                } ${
                  selectedTab === "Articles"
                    ? "ml-20"
                    : selectedTab === "Communities"
                    ? "ml-40"
                    : selectedTab === "About"
                    ? "ml-60"
                    : ""
                }`}
              ></div> */}
            </div>
          </div>

          {/* Right side */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <ToggleSwitch theme={theme} toggleTheme={toggleTheme} />
              {/* <Switch
                checked={theme === "dark"}
                onChange={toggleTheme}
                className={`${
                  theme === "dark" ? "bg-yellow-400" : "bg-gray-200"
                } relative inline-flex items-center h-6 rounded-full w-11`}
              >
                <span className="sr-only">Toggle theme</span>
                <span
                  className={`${
                    theme === "dark" ? "translate-x-6" : "translate-x-1"
                  } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
                {theme === "dark" ? (
                  <MoonIcon className="text-gray-800 w-4 h-4" />
                ) : (
                  <SunIcon className="text-yellow-400 w-4 h-4" />
                )}
              </Switch> */}

              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="rounded-full h-8 w-8 cursor-pointer hover:opacity-75"
                      src="https://via.placeholder.com/40"
                      alt="Avatar"
                      onClick={() => setIsOpen(!isOpen)}
                    />
                  </Menu.Button>
                </div>
                <Menu.Items
                  className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus-outline-none z-50 ${
                    isOpen ? "block" : "hidden"
                  } ${theme === "dark" ? "dark:bg-gray-800" : ""}`}
                >
                  {menuItems.map((item, i) => (
                    <Menu.Item key={i}>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`${
                            active ? "bg-gray-100 dark:bg-gray-700" : ""
                          } block px-4 py-2 text-sm ${
                            theme === "dark" ? "text-white" : "text-gray-700"
                          }`}
                        >
                          {item}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Menu>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500  dark:hover:bg-gray-800 dark:hover:text-gray-300 dark:text-gray-300 dark:focus:ring-blue-400"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 dark:bg-gray-700 flex flex-col items-center justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`block w-full text-center text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 ${
                  router.pathname === link.path ? activeClass : ""
                } dark:text-gray-400`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {/* {tabs.map((tab) => (
              <a
                key={tab}
                href="#"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  selectedTab === tab
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() => {
                  setSelectedTab(tab);
                  setIsOpen(false);
                }}
              >
                {tab}
              </a>
            ))} */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
