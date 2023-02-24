import React from "react";

const ProgressBar = ({ progress }: any) => {
  const progressBar = `w-[${Math.round(progress * 0.4)}px]`;

  return (
    <div className={`relative h-1 w-[40px] bg-gray-300 rounded-sm`}>
      <div
        style={{
          position: "absolute",
          height: "4px",
          background: "#7465ff",
          borderRadius: "2px",
          width: `${Math.round(progress * 0.4)}px`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
