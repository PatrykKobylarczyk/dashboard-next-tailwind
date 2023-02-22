import React from "react";
import Link from "next/link";
import { BsPlus, BsBox, BsWallet2 } from "react-icons/bs";
import { TfiStatsUp } from "react-icons/tfi";
import { RiMessage2Line } from "react-icons/ri";
import { MdPersonOutline } from "react-icons/md";
import { FiPieChart } from "react-icons/fi";
import { RxCalendar } from "react-icons/rx";
import { TbChecklist } from "react-icons/tb";
import useMediaQuery from "@/hooks/useMediaQuery";

const NavbarLinks = ({ isOpen, setIsOpen }: any) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const linksColor = `flex items-center gap-3 xs:gap-1 ${
    !isAboveSmallScreens && "text-white"
  }`;

  return (
    <ul className=" w-full flex flex-col gap-3 ">
      <li
        className={`uppercase ${
          isAboveSmallScreens ? "text-gray-400" : "text-gray-200"
        } w-full flex justify-between items-center font-bold`}
      >
        <p>pages</p>
        <BsPlus size={"16px"} />
      </li>
      <li className="flex flex-col gap-3 ml-2">
        <div className={linksColor}>
          <FiPieChart color="white" />
          <Link href="/" onClick={() => setIsOpen(false)}>
            Dashboard
          </Link>
        </div>
        <div className={linksColor}>
          <TfiStatsUp color="white" />
          <Link href="/analytics" onClick={() => setIsOpen(false)}>
            Analytics
          </Link>
        </div>
        <div className={linksColor}>
          <BsBox color="white" />
          <Link href="/ecommerce" onClick={() => setIsOpen(false)}>
            E-commerce
          </Link>
        </div>
      </li>
      <li
        className={`uppercase ${
          isAboveSmallScreens ? "text-gray-400" : "text-gray-200"
        } w-full flex justify-between items-center font-bold mt-3`}
      >
        <p>apps</p>
        <BsPlus size={"16px"} />
      </li>
      <li className="flex flex-col gap-3 ml-2">
        <div className={linksColor}>
          <BsWallet2 color="white" />
          <Link href="/finance" onClick={() => setIsOpen(false)}>
            Finance
          </Link>
        </div>
        <div className={linksColor}>
          <RiMessage2Line color="white" />
          <Link href="/messages" onClick={() => setIsOpen(false)}>
            Messages
          </Link>
        </div>
        <div className={linksColor}>
          <RxCalendar color="white" />
          <Link href="/calendar" onClick={() => setIsOpen(false)}>
            Calendar
          </Link>
        </div>
        <div className={linksColor}>
          <TbChecklist color="white" />
          <Link href="/tasks" onClick={() => setIsOpen(false)}>
            Tasks
          </Link>
        </div>
      </li>
      <li
        className={`uppercase ${
          isAboveSmallScreens ? "text-gray-400" : "text-gray-200"
        } w-full flex justify-between items-center font-bold mt-3`}
      >
        <p>settings</p>
        <BsPlus size={"16px"} />
      </li>
      <li className="flex flex-col gap-3 ml-2">
        <div className={linksColor}>
          <MdPersonOutline color="white" />
          <Link href="/myprofile" onClick={() => setIsOpen(false)}>
            My Profile
          </Link>
        </div>
      </li>
    </ul>
  );
};

export default NavbarLinks;
