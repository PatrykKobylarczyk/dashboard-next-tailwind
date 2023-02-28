import React from "react";

import useMediaQuery from "../hooks/useMediaQuery";

const CustomersTableRow = ({ item }: any) => {
  const isAboveSuperSmallScreens = useMediaQuery("(min-width: 480px)");

  return (
    <tr className="relative w-full flex items-center last:rounded-bl-2xl last:rounded-br-2xl hover:bg-Primary/10 ">
      <td className="tableRow text-Primary min-w-[130px]">
        <div className="flex items-center gap-1 xs:gap-2 w-full lg:text-xs">
          <img
            className="rounded-full"
            src={item.image}
            alt={item.name}
            width={`${isAboveSuperSmallScreens ? "28px" : "20px"}`}
            height={`${isAboveSuperSmallScreens ? "28px" : "20px"}`}
          />
          {item.name}
        </div>
      </td>
      <td className="tableRow min-w-[150px] ">{item.email}</td>
      <td className="tableRow ">{item.location}</td>
      <td className="tableRow ">{item.phone}</td>
      <td className="tableRow">{item.signedUp}</td>
    </tr>
  );
};

export default CustomersTableRow;
