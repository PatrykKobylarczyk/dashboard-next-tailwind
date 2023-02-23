import React from "react";
import NavbarLinks from "./NavbarLinks";

const MobileMenu = ({ isOpen, setIsOpen }: any) => {
  return (
    <div
      className={`w-full h-full bg-Primary rounded-2xl absolute top-0 left-0 z-40 flex flex-col justify-center items-center xs:items-startc pt-16 xs:px-20 ${isOpen ? 'translate-x-0 text-white' : 'translate-x-[-105%]'} transition duration-500`}    >
      <div className="min-w-[200px] ">
        <NavbarLinks isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
    </div>
  );
};

export default MobileMenu;
