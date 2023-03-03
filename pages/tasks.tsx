import PageContent from "@/components/PageContent";
import React, { useEffect, useMemo, useState } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import TaskCard from "@/components/TaskCard";
import AddTaskModal from "@/components/AddTaskModal";

export const TasksList = ({ children, title, handleAddNewTask }: any) => {
  return (
    <div>
      <div className="w-full flex justify-between mb-5">
        <h2>{title}</h2>
        <button
          className="h-10 px-6 bg-Primary text-white text-xl"
          onClick={() => handleAddNewTask(title)}
        >
          +
        </button>
      </div>
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );
};

const Tasks = () => {
  const [isModal, setIsModal] = useState<any>(null);
  const [tasksTodo, setTasksTodo] = useState<any[]>([]);
  const [tasksInprogress, setTasksInprogress] = useState<any[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState<any[]>([]);

  // get tasks from firebase
  const getTasks = async (categoryName: string, categoryState: any) => {
    const tasks: any[] = [];
    const docsRef = collection(db, categoryName);
    const docsSnap = await getDocs(docsRef);
    docsSnap.forEach((doc: any) => {
      tasks.push(doc.data());
      categoryState(tasks);
    });
  };

  useMemo(() => {
    getTasks("todo", setTasksTodo);
    getTasks("inprogress", setTasksInprogress);
    getTasks("completed", setTasksCompleted);
  }, []);

  const handleAddNewTask = (title: string) => {
    setIsModal(title);
  };

  return (
    <PageContent>
      <h2 className="w-full font-bold text-2xl lg:text-3xl mb-10 mt-6">
        Tasks
      </h2>
      <div className="w-full h-full grid grid-col-1 lg:grid-cols-3 lg gap-16">
        <TasksList title="To Do" id="1" handleAddNewTask={handleAddNewTask}>
          {tasksTodo.map((item) => (
            <TaskCard
              key={item.name}
              title={item.title}
              description={item.description}
            />
          ))}
        </TasksList>
        <TasksList
          title="In Progress"
          id="2"
          handleAddNewTask={handleAddNewTask}
        >
          {tasksInprogress.map((item) => (
            <TaskCard
              key={item.name}
              title={item.title}
              description={item.description}
            />
          ))}
        </TasksList>
        <TasksList title="Completed" id="3" handleAddNewTask={handleAddNewTask}>
          {tasksCompleted.map((item) => (
            <TaskCard
              key={item.name}
              title={item.title}
              description={item.description}
            />
          ))}
        </TasksList>
      </div>
      {isModal && (
        <AddTaskModal
          isModal={isModal}
          setIsModal={setIsModal}
          title={isModal}
        />
      )}
    </PageContent>
  );
};

export default Tasks;
