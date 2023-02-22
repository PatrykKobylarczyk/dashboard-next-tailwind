import React from "react";

const DashboardStatisticCard = ({item}: any) => {
  const statisticStyles =
    "w-full h-28 flex flex-col justify-between  bg-white text-gray-500 rounded-xl p-3 shadow-sm hover:shadow-md cursor-pointer transition duration-200";

  return (
    <div className={statisticStyles}>
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
          {item.percentage}%
        </p>
      </div>
      <p className="font-bold text-xl">${item.amount}</p>
      <div className="w-full flex justify-between items-end">
        <button type="button" className="text-[9px] text-Primary">
          {item.link}
        </button>
        <span className="w-7 h-7 bg-Primary/20 rounded-md grid place-items-center text-Primary text-xs">
          {item.icon}
        </span>
      </div>
    </div>
  );
};

export default DashboardStatisticCard;
