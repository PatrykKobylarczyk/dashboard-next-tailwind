import React from "react";
import { BiEdit } from "react-icons/bi";
import { BsClockFill } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import BasicCard from "./BasicCard";

const ToDoCard = () => {
  return (
    <BasicCard>
      <div className="flex flex-col gap-5">
        <h3>Orders</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          consectetur tortor et arcu egestas elementum. Ut sed lacus mauris. Sed
          varius sagittis dui sit amet condimentum. Pellentesque sed tincidunt
          nunc.
        </p>
        <span className="w-full h-[1px] bg-gray-100" />
      </div>
      <div className="w-full flex justify-between items-center pt-3">
        <div className="flex gap-2 items-center">
          <BsClockFill />
          <p>20 Apr, 2023</p>
        </div>

        <div className="flex gap-5 items-center">
          <RiDeleteBin6Line size={"20px"} />
          <FaRegCheckCircle size={"20px"} />
          <BiEdit size={"20px"} />
        </div>
      </div>
    </BasicCard>
  );
};

export default ToDoCard;
