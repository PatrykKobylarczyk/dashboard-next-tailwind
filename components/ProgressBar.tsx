import React from "react";

const ProgressBar = ({ progress }: any) => {

  const fillProgressBar = Math.round(progress * 0.4);

  return (
    <span
      className={`relative h-1 w-[40px] bg-gray-300 rounded-sm before:absolute before:w-[${fillProgressBar}px] before:h-1 before:bg-Primary`}
    ></span>
  );
};

export default ProgressBar;
