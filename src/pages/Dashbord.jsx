import Line from "../components/Dash/Line";
import Tarte from "../components/Dash/Tarte";
import Gridd from "../components/Dash/Gridd";
import SideBar from "../components/SideBar/Index";
import NavBar from "../components/Navbar/Index";
import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "aside",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["aside", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "span.b",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["span.b", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "span.b",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}

export default function Dashbord() {
  const [isOpen, setIsOpen] = useState(true);
  const scope = useMenuAnimation(isOpen);
  return (
    <>
      <div ref={scope}>
        {isOpen && <SideBar />}
        <NavBar
          toggle={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
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
