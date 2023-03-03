import React, { useCallback, useEffect, useState } from "react";
import Logo from "./Logo";
import Hamburger from "hamburger-react";

//HOOKS
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";

//DATA
import { customersData } from "@/data/customersData";
import AccountPopup from "./AccountPopup";

const Header = ({ isOpen, setIsOpen }: any) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const [isPopup, setIsPopup] = useState<boolean>(false);

  const closePopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    closePopup();
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
      <div className="relative">
        <button
          className="hover:bg-Primary p-[2px] rounded-full"
          onClick={() => setIsPopup((prev: any) => !prev)}
        >
          <Image
            className="rounded-full cursor-pointer"
            src={customersData[0].image}
            alt="Profile"
            width={40}
            height={40}
          />
        </button>
        {isPopup && <AccountPopup setIsPopup={setIsPopup} />}
      </div>
    </header>
  );
};

export default Header;
