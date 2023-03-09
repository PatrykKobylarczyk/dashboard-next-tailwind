import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BsClockFill } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import BasicCard from "./BasicCard";

interface Details {
  title: string;
  description: string;
  category: string;
  deleteTask: any;
  moveTask: any;
  setIsEdit: any;
  id: string;
}

const TaskCard = ({
  title,
  description,
  category,
  deleteTask,
  moveTask,
  id,
  setIsEdit,
}: Details) => {
  const [textInTooltip, setTextInTooltip] = useState("");

  useEffect(() => {
    switch (category) {
      case "todo":
        setTextInTooltip('Move to "In progress"');
        break;
      case "inprogress":
        setTextInTooltip('Move to "Completed"');
        break;
      case "completed":
        setTextInTooltip('restore to "In progress"');
        break;
    }
  }, [category]);

  return (
    <div className="w-full">
      <BasicCard>
        <div className="flex flex-col gap-5">
          <h3>{title}</h3>
          <p>{description}</p>
          <span className="w-full h-[1px] bg-gray-100" />
        </div>
        <div className="w-full flex justify-between items-center pt-3">
          <div className="flex gap-2 items-center">
            <BsClockFill />
            <p>20 Apr, 2023</p>
          </div>

          <div className="flex gap-5 items-center">
            <div
              className="tooltip cursor-pointer"
              onClick={() => deleteTask(category, id)}
            >
              <RiDeleteBin6Line size={"20px"} />
              <span className="tooltiptext mb-2">Delete</span>
            </div>
            <div
              className="tooltip cursor-pointer"
              onClick={() => moveTask(category, id)}
            >
              <FaRegCheckCircle size={"20px"} />
              <span className="tooltiptext mb-2">{textInTooltip}</span>
            </div>
            <div
              className="tooltip cursor-pointer"
              onClick={() => setIsEdit({category, id})}
            >
              <BiEdit size={"20px"} />
              <span className="tooltiptext mb-2">Edit</span>
            </div>
          </div>
        </div>
      </BasicCard>
    </div>
  );
};

export default TaskCard;
