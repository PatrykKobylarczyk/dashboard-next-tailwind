import React, { useState } from "react";
import PageContent from "@/components/PageContent";
import { BiImport, BiExport } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";
import BasicCard from "@/components/BasicCard";
import CustomersTableRow from "@/components/CustomersTableRow";

//DATA
import { customersData } from "@/data/customersData";
import CustomerPagination from "@/components/CustomerPagination";

interface Customer {
  id: number;
  name: string;
  email: string;
  location: string;
  phone: string;
  signedUp: string;
  image: string;
}

const Customers = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const customerPerPage = 8;
  const [inputSearchCustomerValue, setInputSearchCustomerValue] = useState("");

  // input Search Customer handler
  const handleChangeSearchInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputSearchCustomerValue(event.target.value);
  };

  // searching customer
  const filteredCustomers = customersData.filter((customer): any => {
    if (inputSearchCustomerValue.length === 0) {
      return customersData;
    }
    if (inputSearchCustomerValue.length > 0) {
      return (
        inputSearchCustomerValue.trim().toLowerCase() ===
        customer.name
          .trim()
          .toLowerCase()
          .slice(0, inputSearchCustomerValue.length)
      );
    }
  });

  console.log(filteredCustomers);

  // Get current customers
  const indexOfLastCustomer = currentPage * customerPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customerPerPage;
  const currentCustomers = filteredCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  const data = currentCustomers.map((item: Customer) => (
    <CustomersTableRow key={item.id} item={item} />
  ));

  return (
    <PageContent>
      <div className="page w-full h-full flex flex-col gap-3 sm:gap-4 overflow-x-hidden">
        <div className="w-full flex justify-between items-center">
          <h2 className="font-bold text-2xl lg:text-3xl my-6">Customers</h2>
          <button className="text-white bg-Primary rounded-xl px-3 md:px-5 h-10 md:h-14">
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
          <form className="relative w-auto flex items-center ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <FiSearch />
            </div>
            <input
              type="search"
              placeholder="search the customer"
              className="w-full sm:w-1/2 md:w-1/3 border-2 border-gray-200 px-8 py-2 rounded-xl placeholder:'search the customer' focus:border-Primary focus:border-2 transition duration-300 outline-none before:absolute before:content-['search'] "
              onChange={handleChangeSearchInput}
            />
          </form>
        </BasicCard>

        <BasicCard resetPadding>
          <div className="w-full pb-2 overflow-x-auto">
            <table className="w-full min-w-[600px] ">
              <tbody className="w-full">
                <tr className="w-full flex over">
                  <td className="categoryTable rounded-tl-2xl min-w-[130px] ">
                    name
                  </td>
                  <td className="categoryTable min-w-[150px]">e-mail</td>
                  <td className="categoryTable">location</td>
                  <td className="categoryTable">phone</td>
                  <td className="categoryTable rounded-tr-2xl">signed up</td>
                </tr>
              </tbody>
              <tbody className="w-full overflow-x-auto text-center">{filteredCustomers.length!==0 ? data :<p className="pt-5 pb-3">Not found</p>}</tbody>
            </table>
          </div>
        </BasicCard>
        <BasicCard>
          <CustomerPagination
            currentPage={currentPage}
            total={filteredCustomers.length}
            customerPerPage={customerPerPage}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </BasicCard>
      </div>
    </PageContent>
  );
};

export default Customers;
