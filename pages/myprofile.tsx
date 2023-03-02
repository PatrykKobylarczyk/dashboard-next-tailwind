import BasicCard from "@/components/BasicCard";
import PageContent from "@/components/PageContent";
import UserDetailsForm from "@/components/UserDetailsForm";
import Image from "next/image";
import React from "react";

const MyProfile = () => {
  return (
    <PageContent>
      <h2 className="w-full h-full font-bold text-2xl lg:text-3xl mt-10">
        My Profile
      </h2>
      <div className="w-full lg:w-11/12 h-full grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="md:col-span-1">
          <BasicCard>
            <div className="flex flex-col items-center pt-12">
              <Image
                className="rounded-full mb-5"
                src={"https://i.pravatar.cc/150?img=8"}
                alt={"Profile"}
                width={120}
                height={120}
                priority
              />
              <h2 className="font-extrabold text-gray-600">Jimmy Page</h2>
              <p className="text-sm">Atlanta, Georgia, USA</p>
              <span className="w-full h-[1px] bg-gray-100 mt-10 mb-3" />
              <button className="text-Primary w-full grid place-items-center hover:bg-Primary ">
                Upload picture
              </button>
            </div>
          </BasicCard>
        </div>
        <UserDetailsForm />
      </div>
    </PageContent>
  );
};

export default MyProfile;
