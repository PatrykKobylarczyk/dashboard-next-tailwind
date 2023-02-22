import React from "react";


const PageContent = ({ children }: any) => {
  return (
    <div className="page w-full h-full bg-orange-500! grid place-items-center p-5 overflow-auto">
      {children}
    </div>
  );
};

export default PageContent;
