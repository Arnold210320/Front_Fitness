import logo from "../assets/Me.jpg";
import { Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="  bottom-0 w-full p-4 bg-[#020817] border-slate-900">
        <div className=" grid grid-flow-col items-center">
          <div className="flex flex-col items-center">
            <img
              className="w-[50px] h-[50px] rounded-xl "
              src={logo}
              alt="logo"
            />
            <h1 className="text-white text-2xl font-bold ">BENOÏD</h1>
          </div>
          <div>
            <p className="text-sm text-white text-center ">
              Copyright © 2024 ® - All right reserved ©
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Instagram color="white" />
            <Linkedin color="white" />
            <Twitter color="white" />
          </div>
        </div>
      </footer>
    </>
  );
}
