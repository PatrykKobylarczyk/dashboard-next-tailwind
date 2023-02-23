import React from 'react'
import { useRouter } from "next/router";
import Link from "next/link";

const CustomLink = ({link, isAboveSmallScreens, setIsOpen}:any) => {
    const router = useRouter();

  return (
    <li
          className={`flex items-center p-2 sm:p-3 gap-2 ${
            router.pathname == link.path
              ? isAboveSmallScreens
                ? "activeDesktop "
                : "activeMobile"
              : ""
          }`}
        >
          {link.icon}
          <Link href={link.path} className='w-full h-full' onClick={() => setIsOpen(false)}>
            {link.name}
          </Link>
        </li>
  )
}

export default CustomLink
