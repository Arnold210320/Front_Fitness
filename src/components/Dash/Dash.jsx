import Line from "./Line";
import Tarte from "./Tarte";
import Gridd from "./Gridd";
import SideBar from "../SideBar/Index";
import NavBar from "../Navbar/Index";
import { useState } from "react";

export default function Dash() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <SideBar />}
      <div className="rounded-lg md:mt-14 sm:mt-0">
        <div className="flex flex-col sm:flex-row sm:w-[100vh]">
          <div
            className={`${
              !isOpen
                ? "rounded-2xl bg-gray-50 mb-4 mt-6 lg:ml-[2rem] sm:block hidden"
                : "rounded-2xl bg-gray-50 mb-4 mt-6 lg:ml-[21rem] sm:ml-[2rem] sm:block hidden"
            }`}
          >
            <Line />
          </div>
        </div>
        <div
          className={`${
            !isOpen
              ? "grid grid-cols-1 sm:grid-cols-2 md:mb-4 md:mt-8 md:ml-[1rem] gap-8"
              : "grid grid-cols-1 sm:grid-cols-2 md:mb-4 md:mt-8 lg:ml-[21rem] sm:ml-[1rem] gap-8"
          }`}
        >
          <div className="rounded-2xl bg-gray-50 mt-4">
            <Gridd />
          </div>
          <div className=" rounded-2xl flex items-center">
            <Tarte />
          </div>
        </div>
      </div>
    </>
  );
}
