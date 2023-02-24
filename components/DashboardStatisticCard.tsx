import React from "react";
import BasicCard from "./BasicCard";

const DashboardStatisticCard = ({ item }: any) => {
  return (
    <BasicCard padding>
      <div className="w-full h-24 flex flex-col justify-between">
        <div className="w-full flex justify-between text-xs">
          <p className="uppercase font-semibold">{item.title}</p>
          <p
            className={`${
              item.percentage >= 0
                ? item.percentage > 0
                  ? "text-Success"
                  : "text-gray-500"
                : "text-Error"
            }`}
          >
            {item.unit !== "%" && item.percentage}
            {item.unit !== "%" && "%"}
          </p>
        </div>
        <p className="font-bold text-xl">
          {item.unit !== "%" && item.unit}
          {item.amount}
          {item.unit === "%" && item.unit}
          {item.thousands && "k"}
        </p>
        <div className="w-full flex justify-between items-end">
          <button type="button" className="text-[9px] text-Primary">
            {item.link}
          </button>
          <span className="w-7 h-7 bg-Primary/20 rounded-md grid place-items-center text-Primary text-xs">
            {item.icon}
          </span>
        </div>
      </div>
    </BasicCard>
  );
};

export default DashboardStatisticCard;
