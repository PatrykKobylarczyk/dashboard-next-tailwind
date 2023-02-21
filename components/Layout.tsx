import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <div className="relative w-full h-full">
      <Header />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
