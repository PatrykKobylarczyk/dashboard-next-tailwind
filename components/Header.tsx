import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full h-16 absolute top-0 left-0 bg-white flex justify-between items-center rounded-tl-2xl rounded-tr-2xl px-6">
      <Logo />
      <p className="text-xs font-bold">account items</p>
    </header>
  );
};

export default Header;
