import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Hamburger from "hamburger-react";

//HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

const Header = ({ isOpen, setIsOpen }: any) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setIsOpen(false);
  }, [isAboveSmallScreens]);

  return (
    <header className="w-full h-16 absolute top-0 left-0 bg-white flex justify-between items-center rounded-tl-2xl rounded-tr-2xl px-6 z-50">
      {!isAboveSmallScreens && (
        <Hamburger
          toggled={isOpen}
          toggle={() => setIsOpen((prev: boolean) => !prev)}
          size={25}
          color="#7465ff"
        />
      )}
      <Logo />
      <p className="text-xs font-bold">account items</p>
    </header>
  );
};

export default Header;
