import React, { useState } from "react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import BlendaForMobileMenu from "./BlendaForMobileMenu";
import useAuth from "@/hooks/useAuth";

const Layout = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useAuth();

  return (
    <>
      <div className="relative w-full h-full">
        {user && (
          <div>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            <BlendaForMobileMenu />
          </div>
        )}
        <main className={`${user && 'sm:pl-64 pt-16'}`}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
