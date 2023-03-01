import BasicCard from "@/components/BasicCard";
import PageContent from "@/components/PageContent";
import { companiesData } from "@/data/companiesData";
import Image from "next/image";
import React from "react";
import { BiExport, BiImport } from "react-icons/bi";
import { BsClockFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";
import { TfiDownload } from "react-icons/tfi";

const Companies = () => {
  return (
    <PageContent>
      <div className="w-full h-auto flex flex-col gap-3 sm:gap-4">
        <div className="w-full flex justify-between items-center">
          <h2 className="font-bold text-2xl lg:text-3xl my-6">
            Companies
          </h2>
          <button className="h-10 text-white bg-Primary rounded-xl px-3">
            <HiOutlinePlus />
            Add
          </button>
        </div>
        <div className="flex gap-2 items-center my-2 sm:my-5">
          <button className="flex gap-1 items-center sm:px-4 text-xs sm:text-lg">
            <BiImport />
            Import
          </button>
          <button className="flex gap-1 items-center sm:py-2 sm:px-4 text-xs sm:text-lg">
            <BiExport />
            Export
          </button>
        </div>
        <BasicCard>
          <form className="relative w-auto flex items-center">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <FiSearch />
            </div>
            <input
              type="search"
              placeholder="search the customer"
              className="w-full sm:w-1/2 md:w-1/3 border-2 border-gray-200 px-8 py-2 rounded-xl placeholder:'search the customer' focus:border-Primary focus:border-2 transition duration-300 outline-none before:absolute before:content-['search'] "
            />
          </form>
        </BasicCard>
      </div>
      <div className="w-full h-auto grid grid-col-1 xs:grid-col-2 md:grid-cols-3 gap-5 mt-10">
        {companiesData.map((company): any => {
          return (
            <BasicCard key={company.id}>
              <div className="w-full flex flex-col justify-center items-center gap-4 pt-10">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={60}
                  height={60}
                />
                <h2 className="font-bold">{company.name}</h2>
                <p className="text-center pb-3">{company.description}</p>
                <span className="w-full h-[1px] bg-gray-100" />
                <div className="w-full flex gap-2 justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <BsClockFill />
                    <p>{company.updated}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <TfiDownload />
                    <p>{company.downloads}</p>
                  </div>
                </div>
              </div>
            </BasicCard>
          );
        })}
      </div>
    </PageContent>
  );
};

export default Companies;
