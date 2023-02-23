import React from 'react'
import { useRouter } from "next/router";
import Link from "next/link";

const CustomLink = ({link, isAboveSmallScreens, setIsOpen}:any) => {
    const router = useRouter();

  return (
    <div
          className={`flex items-center p-2 sm:p-3 gap-2  text-white sm:text-black ${
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
        </div>
  )
}

export default CustomLink
