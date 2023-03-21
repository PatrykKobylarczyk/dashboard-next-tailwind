import React, { useCallback, useEffect, useState } from "react";
import BasicCard from "./BasicCard";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { db } from "../firebase";
import { getDoc, setDoc, doc } from "firebase/firestore";

const options = [
  {
    label: "Ney York",
    value: "new york",
  },
  {
    label: "San Francisco",
    value: "san francisco",
  },
  {
    label: "Alabama",
    value: "alabama",
  },
  {
    label: "Los Angeles",
    value: "los angeles",
  },
];

interface Profile {
  country: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  state: string;
}

const profile = {
  country: "",
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  state: "",
};

const UserDetailsForm = () => {
  const { handleSubmit } = useForm();
  const { user } = useAuth();
  const [userProfile, setUserProfile] = useState<any>(profile);
  const [userDetails, setUserDetails] = useState<any>({
    email: user?.email,
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleStateChange = (event: any) => {
    event.preventDefault();
    setUserDetails((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  // submit form set data in Firebase
  const onSubmit = () => {
    setDoc(doc(db, "users", `${user!.email}`), userDetails);
    setIsSaved(true);
  };

  // get data from firebase to fill inputs
  const getProfileDetailsFromDB = async () => {
    const ref = doc(db, "users", `${user!.email}`);
    const docSnap = await getDoc(ref);
    setUserProfile(docSnap.data());
  };

  useEffect(() => {
    getProfileDetailsFromDB();
  }, []);

  const submitSaving = useCallback(() => {
    setTimeout(() => {
      setIsSaved(false);
    }, 3000);
  }, []);

  useEffect(() => {
    submitSaving();
  }, [isSaved]);

  return (
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
                name="firstName"
                placeholder="First name"
                className="input w-full border-2 border-gray-100 focus:border-Primary outline-none px-4 py-2 rounded-lg"
                onChange={handleStateChange}
                defaultValue={userProfile?.firstName}
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="input w-full border-2 border-gray-100 focus:border-Primary outline-none px-4 py-2 rounded-lg"
                onChange={handleStateChange}
                defaultValue={userProfile?.lastName}
              />
            </label>
            <label className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
              <div
                placeholder="E-mail"
                className="input w-full border-2 border-gray-100 focus:border-Primary outline-none px-4 py-2 rounded-lg"
              >
                {userDetails?.email}
              </div>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone number"
                className="input w-full border-2 border-gray-100 focus:border-Primary outline-none px-4 py-2 rounded-lg"
                onChange={handleStateChange}
                defaultValue={userProfile?.phoneNumber}
              />
            </label>
            <label className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="country"
                placeholder="Country"
                className="input w-full border-2 border-gray-100 focus:border-Primary outline-none px-4 py-2 rounded-lg"
                onChange={handleStateChange}
                defaultValue={userProfile?.country}
              />

              <select
                name="state"
                placeholder="State"
                className="input w-full border-2 border-gray-100 focus:border-Primary outline-none px-4 py-2 rounded-lg"
                onChange={handleStateChange}
              >
                <option >{userProfile?.state ? userProfile.state : 'State'}</option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="w-full flex justify-end mt-10">
            <button className="w-full md:w-1/3 bg-Primary text-white py-3 font-semibold flex justify-center">
              {isSaved ? "Saved" : "Save details"}
            </button>
          </div>
        </form>
      </BasicCard>
    </div>
  );
};

export default UserDetailsForm;
