import React from "react";

const BasicCard = ({ children, resetPadding, styles }: any) => {
  return (
    <div className={`w-full bg-white text-gray-500 rounded-xl ${!resetPadding && 'p-3'} shadow-sm hover:shadow-md transition duration-200 ${styles}`}>
      {children}
    </div>
  );
};

export default BasicCard;
