import BasicCard from "@/components/BasicCard";
import PageContent from "@/components/PageContent";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();
  const [userProfile, setUserProfile] = useState({ email: user?.email });
  const [error, setError] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  console.log(userProfile);

  const { handleSubmit } = useForm();

  const onSubmit = () => {};

  return (
    <PageContent>
      <h2 className="w-full h-full font-bold text-2xl lg:text-3xl mt-10">
        My Profile
      </h2>
      <div className="w-full md:w-3/4 h-full grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="md:col-span-1">
          <BasicCard>
            <div className="flex flex-col items-center pt-12">
              <Image
                className="rounded-full mb-5"
                src={"https://i.pravatar.cc/150?img=8"}
                alt={"Profile"}
                width={120}
                height={120}
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

        {/* Profile form */}
        <div className="md:col-span-2">
          <BasicCard>
            <div className="mt-10 ml-5">
              <h2 className="font-semibold">Profile</h2>
              <p className="text-xs">The information can be edited</p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit as any)}
              className="relative rounded pt-12 pb-5 px-5"
            >
              <div className="space-y-4 ">
                <label className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="First name"
                    className="input w-full border-2 border-gray-100 focus:border-Primary outline-none px-4 py-2 rounded-lg"
                  />

                  <input
                    type="text"
                    placeholder="Last name"
                    className="input w-full border-2 border-gray-100 focus:border-Primary outline-none px-4 py-2 rounded-lg"
                  />
                </label>
                <label className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="E-mail"
                    className="input w-full border-2 border-gray-100 focus:border-Primary outline-none px-4 py-2 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="input w-full border-2 border-gray-100 focus:border-Primary outline-none px-4 py-2 rounded-lg"
                  />
                </label>
                <label className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Country"
                    className="input w-full border-2 border-gray-100 focus:border-Primary outline-none px-4 py-2 rounded-lg"
                  />

                  <select
                    placeholder="State"
                    className="input w-full border-2 border-gray-100 focus:border-Primary outline-none px-4 py-2 rounded-lg"
                    // onChange={(e, prev)=>({...prev, state:evalue})}
                  >
                    <option value="">State</option>
                    <option value="Ney York">Ney York</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Los Angeles">Los Angeles</option>
                  </select>
                </label>
              </div>
              <div className="w-full flex justify-end mt-10">
                <button className="w-full md:w-1/3 bg-Primary text-white py-3 font-semibold flex justify-center">
                  Save details
                </button>
              </div>
            </form>
          </BasicCard>
        </div>
      </div>
    </PageContent>
  );
};

export default MyProfile;
