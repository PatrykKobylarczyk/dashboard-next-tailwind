import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CustomLink = ({ link, isAboveSmallScreens, setIsOpen }: any) => {
  const router = useRouter();

  return (
    <Link
      href={link.path}
      className={`flex items-center p-2 sm:p-3 gap-2 hover:bg-Primary/70 hover:text-white rounded-lg sm:transition sm:duration-300 cursor-pointer ${
        router.pathname == link.path
          ? isAboveSmallScreens
            ? "activeDesktop "
            : "activeMobile"
          : ""
      }`}
      onClick={() => setIsOpen(false)}
    >
      {link.icon}
      {link.name}
    </Link>
  );
};

export default CustomLink;
