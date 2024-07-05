import logo from "../../assets/Me.jpg";
import { Menu } from "lucide-react";

import {
  LayoutDashboard,
  Users,
  Network,
  Dumbbell,
  ChevronDown,
  ChevronUp,
  Salad,
  HandHelping,
  MessageCircleQuestion,
} from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [protocoleIsOpen, setProtocoleIsOpen] = useState(false);
  const [dishIsOpen, setDishIsOpen] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const toggleProtocole = () => {
    setProtocoleIsOpen(!protocoleIsOpen);
  };

  const toggleDish = () => {
    setDishIsOpen(!dishIsOpen);
  };

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-black rounded-md sm:hidden"
        onClick={toggleSidebar}
      >
        {sidebarIsOpen ? <Menu /> : <Menu />}
      </button>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-4 transition-transform ${
          sidebarIsOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-pink-50 dark:border-gray-50`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-pink-50">
          <img
            className="rounded-lg w-[90px] h-[90px] ml-[30%] mb-4"
            src={logo}
            alt="Logo"
          />
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <LayoutDashboard />
                <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2  rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Users />
                <span className="flex-1 ms-3 whitespace-nowrap">Customer</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2  rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Network />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  sponsorship
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base  transition duration-75 rounded-lg group hover:bg-gray-100  dark:hover:bg-gray-700"
                onClick={toggleProtocole}
              >
                <Dumbbell />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Protocole
                </span>
                {protocoleIsOpen ? <ChevronUp /> : <ChevronDown />}
              </button>
              <ul
                id="dropdown-protocole"
                className={`py-2 space-y-2 ${
                  protocoleIsOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700"
                  >
                    List
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700"
                  >
                    Exercise
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base  transition duration-75 rounded-lg group hover:bg-gray-100  dark:hover:bg-gray-700"
                onClick={toggleDish}
              >
                <Salad />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Dish
                </span>
                {dishIsOpen ? <ChevronUp /> : <ChevronDown />}
              </button>
              <ul
                id="dropdown-dish"
                className={`py-2 space-y-2 ${dishIsOpen ? "block" : "hidden"}`}
              >
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700"
                  >
                    List
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Attribution
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2  rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <HandHelping />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Assistance
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2  rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MessageCircleQuestion />
                <span className="flex-1 ms-3 whitespace-nowrap">FAQ</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
