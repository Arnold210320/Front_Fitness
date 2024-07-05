import { useState } from "react";
import SideBar from "../components/SideBar/Index";
import NavBar from "../components/Navbar/Index";
import Dash from "../components/Dash/Dash";

export default function Dashbord() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <SideBar />}
      <Dash />
    </>
  );
}
