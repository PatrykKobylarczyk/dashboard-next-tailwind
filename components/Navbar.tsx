import React from "react";
import NavbarLinks from "./NavbarLinks";

//HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = ({ isOpen, setIsOpen }: any) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {isAboveSmallScreens && (
        <nav className="w-64 h-full bg-white absolute top-0 left-0 rounded-l-2xl p-6 pt-20 text-xs font-medium">
          <NavbarLinks isOpen={isOpen} setIsOpen={setIsOpen}/>
        </nav>
      )}
    </>
  );
};

export default Navbar;
