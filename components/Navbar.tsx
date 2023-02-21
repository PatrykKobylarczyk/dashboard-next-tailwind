import React from "react";
import Link from "next/link";
import { BsPlus } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className="w-64 h-full bg-white absolute top-0 left-0 rounded-l-2xl p-6 pt-20 text-xs font-medium">
      <ul className="flex flex-col gap-3">
        <li className="uppercase text-gray-400 w-full flex justify-between items-center font-bold"> <p>pages</p><BsPlus size={'16px'}/></li>
        <li className="flex flex-col gap-3 ml-2">
          <Link href="/">Dashboard</Link>
          <Link href="/analytics">Analytics</Link>
          <Link href="/ecommerce">E-commerce</Link>
        </li>
        <li className="uppercase text-gray-400 w-full flex justify-between items-center font-bold mt-3"><p>apps</p><BsPlus size={'16px'}/></li>
        <li className="flex flex-col gap-3 ml-2">
          <Link href="/finance">Finance</Link>
          <Link href="/messages">Messages</Link>
          <Link href="/calendar">Calendar</Link>
          <Link href="/tasks">Tasks</Link>
        </li>
        <li className="uppercase text-gray-400 w-full flex justify-between items-center font-bold mt-3"><p>settings</p><BsPlus size={'16px'}/></li>
        <li className="flex flex-col gap-3 ml-2">
          <Link href="/myprofile">My Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
