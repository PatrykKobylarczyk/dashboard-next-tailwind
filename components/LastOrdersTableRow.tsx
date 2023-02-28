import React from "react";

//HOOKS
import useMediaQuery from "../hooks/useMediaQuery";
import ProgressBar from "./ProgressBar";

const LastOrdersTableRow = ({ item }: any) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const isAboveSuperSmallScreens = useMediaQuery("(min-width: 480px)");

  return (
    <tr className="relative w-full flex justify-between items-center last:rounded-bl-2xl last:rounded-br-2xl hover:bg-Primary/10 ">
      <td className="tableRow text-Primary">
        <div className="w-[48px] xs:w-[80px] lg:text-xs">{item.location}</div>
      </td>
      <td className="tableRow">
        <div className="flex items-center gap-1 xs:gap-2 w-[100px] xs:w-[112px] lg:text-xs">
          <img
            className="rounded-full"
            src={item.image}
            alt={item.name}
            width={`${isAboveSuperSmallScreens ? "28px" : "20px"}`}
            height={`${isAboveSuperSmallScreens ? "28px" : "20px"}`}
          />
          {item.director}
        </div>
      </td>
      {isAboveMediumScreens && (
        <td className="tableRow lg:text-xs">
          <ProgressBar progress={item.progress} />
          {item.progress}%
        </td>
      )}
      {isAboveSmallScreens && <td className="tableRow lg:text-xs">{item.deadline}</td>}
      {isAboveMediumScreens && <td className="tableRow lg:text-xs">{item.visited}</td>}
      <td className="tableRow">
        <div
          className={`${
            item.status === "pending"
              ? "bg-Warning/20 text-Warning"
              : item.status === "completed"
              ? "bg-Success/20 text-Success"
              : "bg-Error/30 text-Error"
          } py-1 px-2 xs:px-3 rounded-md text-[8px] xs:text-[9px] lg:text-xs`}
        >
          {item.status}
        </div>
      </td>
    </tr>
  );
};

export default LastOrdersTableRow;
