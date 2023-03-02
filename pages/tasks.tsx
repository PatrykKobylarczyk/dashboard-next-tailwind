import BasicCard from "@/components/BasicCard";
import PageContent from "@/components/PageContent";
import ToDoCard from "@/components/ToDoCard";
import React from "react";

const Tasks = () => {
  return (
    <PageContent>
      <h2 className="w-full font-bold text-2xl lg:text-3xl mb-10 mt-6">Tasks</h2>
      <div className="w-full h-full grid grid-col-1 xs:grid-col-2 md:grid-cols-3 gap-16">
        <div>
          <div className="w-full flex justify-between mb-5">
            <h2>To Do</h2>
            <button className="h-10 px-6 bg-Primary text-white text-xl">
              +
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <ToDoCard />
            <ToDoCard />
            <ToDoCard />
            <ToDoCard />
            <ToDoCard />
            <ToDoCard />
          </div>
        </div>
        <div>
          <div className="w-full flex justify-between mb-5">
            <h2>In Progress</h2>
            <button className="h-10 px-6 bg-Primary text-white text-xl">
              +
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <ToDoCard />
            <ToDoCard />
          </div>
        </div>
        <div>
          <div className="w-full flex justify-between mb-5">
            <h2>Completed</h2>
            <button className="h-10 px-6 bg-Primary text-white text-xl">
              +
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <ToDoCard />
            <ToDoCard />
            <ToDoCard />
          </div>
        </div>
      </div>
    </PageContent>
  );
};

export default Tasks;
