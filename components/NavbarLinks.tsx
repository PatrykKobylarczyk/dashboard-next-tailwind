import React from "react";
import { TfiStatsUp } from "react-icons/tfi";
import { RiMessage2Line } from "react-icons/ri";
import { MdPersonOutline } from "react-icons/md";
import { FiPieChart } from "react-icons/fi";
import { RxCalendar } from "react-icons/rx";
import { TbChecklist } from "react-icons/tb";
import useMediaQuery from "@/hooks/useMediaQuery";
import CustomLink from "./CustomLink";

const links = [
  {
    id: 1,
    name: "Dashboard",
    icon: <FiPieChart />,
    path: "/",
  },
  {
    id: 2,
    name: "Customers",
    icon: <TfiStatsUp />,
    path: "/customers",
  },
  {
    id: 3,
    name: "Companies",
    icon: <RxCalendar />,
    path: "/companies",
  },
  // {
  //   id: 4,
  //   name: "Messages",
  //   icon: <RiMessage2Line />,
  //   path: "/messages",
  // },
  {
    id: 5,
    name: "Tasks",
    icon: <TbChecklist />,
    path: "/tasks",
  },
  {
    id: 6,
    name: "My Profile",
    icon: <MdPersonOutline />,
    path: "/myprofile",
  },
];

const NavbarLinks = ({ setIsOpen }: any) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  const navLinks = links.map((link: any) => {
    return (
      <CustomLink
        key={link.id}
        link={link}
        isAboveSmallScreens={isAboveSmallScreens}
        setIsOpen={setIsOpen}
      />
    );
  });

  return <div className=" w-full flex flex-col gap-1 sm:mt-16">{navLinks}</div>;
};

export default NavbarLinks;
