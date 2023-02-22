import React, {useState} from "react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import BlendaForMobileMenu from "./BlendaForMobileMenu";

const Layout = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className="relative w-full h-full">
      <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
      <BlendaForMobileMenu/>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
