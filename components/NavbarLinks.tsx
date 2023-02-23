import React from "react";
import { BsPlus, BsBox, BsWallet2 } from "react-icons/bs";
import { TfiStatsUp } from "react-icons/tfi";
import { RiMessage2Line } from "react-icons/ri";
import { MdPersonOutline } from "react-icons/md";
import { FiPieChart } from "react-icons/fi";
import { RxCalendar } from "react-icons/rx";
import { TbChecklist } from "react-icons/tb";
import useMediaQuery from "@/hooks/useMediaQuery";
import CustomLink from "./CustomLink";

const pages = [
  {
    id: 1,
    name: "Dashboard",
    icon: <FiPieChart />,
    path: "/",
  },
  {
    id: 2,
    name: "Analytics",
    icon: <TfiStatsUp />,
    path: "/analytics",
  },
  {
    id: 3,
    name: "E-commerce",
    icon: <BsBox />,
    path: "/ecommerce",
  },
];

const apps = [
  {
    id: 4,
    name: "Finance",
    icon: <BsWallet2 />,
    path: "/finance",
  },
  {
    id: 5,
    name: "Messages",
    icon: <RiMessage2Line />,
    path: "/messages",
  },
  {
    id: 6,
    name: "Calendar",
    icon: <RxCalendar />,
    path: "/calendar",
  },
  {
    id: 7,
    name: "Tasks",
    icon: <TbChecklist />,
    path: "/tasks",
  },
];

const settings = [
  {
    id: 8,
    name: "My Profile",
    icon: <MdPersonOutline />,
    path: "/myprofile",
  },
];

const NavbarLinks = ({ setIsOpen }: any) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  const getLinks = (linksArr: any[]) => {
    const links = linksArr.map((link: any) => {
      return (
        <CustomLink
          key={link.id}
          link={link}
          isAboveSmallScreens={isAboveSmallScreens}
          setIsOpen={setIsOpen}
        />
      );
    });
    return links;
  };

  const getPagesLink = getLinks(pages);
  const getAppsLink = getLinks(apps);
  const getSettingsLink = getLinks(settings);

  const listStyle = `uppercase ${
    isAboveSmallScreens ? "text-gray-400" : "text-gray-200"
  } w-full flex justify-between items-center font-bold`;

  return (
    <div className=" w-full flex flex-col gap-3 ">
      <div className={listStyle}>
        <p>pages</p>
        <BsPlus size={"16px"} />
      </div>
      <ul className="flex flex-col">{getPagesLink}</ul>
      <div className={`${listStyle} mt-3`}>
        <p>apps</p>
        <BsPlus size={"16px"} />
      </div>
      <ul className="flex flex-col">{getAppsLink}</ul>
      <div className={`${listStyle} mt-3`}>
        <p>settings</p>
        <BsPlus size={"16px"} />
      </div>
      <ul className="flex flex-col">{getSettingsLink}</ul>
    </div>
  );
};

export default NavbarLinks;
