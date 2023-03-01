import React from "react";


const PageContent = ({ children }: any) => {
  return (
    <div className="page w-full h-full grid place-items-center p-5 md:p-16 overflow-y-auto ">
      {children}
    </div>
  );
};

export default PageContent;
