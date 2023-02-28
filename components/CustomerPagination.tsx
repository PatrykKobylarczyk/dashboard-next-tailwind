import React from "react";

const range = (start: number, end: number) => {
  return [...Array(end).keys()].map((el) => el + start);
};

interface Customer {
  id: number;
  name: string;
  email: string;
  location: string;
  phone: string;
  signedUp: string;
  image: string;
}

const CustomerPagination = ({
  total,
  customerPerPage,
  currentPage,
  onPageChange,
}: any) => {
  const pagesCount = Math.ceil(total / customerPerPage);
  const pages = range(1, pagesCount);

  return (
    <ul className="w-full flex justify-center items-center gap-3 my-1">
      {pages.map((page: any) => (
        <li
          className={`px-2 border-2 rounded-lg cursor-pointer transition duration-300 ${
            page === currentPage
              ? "border-2 border-Primary "
              : "border-transparent"
          }`}
          key={page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};

export default CustomerPagination;
