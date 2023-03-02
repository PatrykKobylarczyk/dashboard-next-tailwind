import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import React from "react";

const AccountPopup = ({ setIsPopup }: any) => {
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    setIsPopup(false);
  };

  return (
    <div
      className="absolute w-40 h-44 grid place-items-center py-12 bg-Primary text-white font-bold text-base -translate-x-[100%] rounded-xl 
    rounded-tr-none "
    >
      <Link href="/myprofile" onClick={() => setIsPopup(false)}>
        My Profile
      </Link>
      {user && <button onClick={() => handleLogout()}>Log out</button>}
    </div>
  );
};

export default AccountPopup;
