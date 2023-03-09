import PageContent from "@/components/PageContent";
import React, { useMemo, useEffect, useState } from "react";
import { db } from "../firebase";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import TaskCard from "@/components/TaskCard";
import AddTaskModal from "@/components/AddTaskModal";
import EditTaskModal from "@/components/EditTaskModal";

export const TasksList = ({ children, listName, setIsModal }: any) => {
  return (
    <div>
      <div className="w-full flex justify-between mb-5">
        <h2>{listName}</h2>
        <button
          className="h-10 px-6 bg-Primary text-white text-xl"
          onClick={() => setIsModal(listName)}
        >
          +
        </button>
      </div>
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );
};

const Tasks = () => {
  const [tasksTodo, setTasksTodo] = useState<any[]>([]);
  const [tasksInprogress, setTasksInprogress] = useState<any[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState<any[]>([]);
  const [isModal, setIsModal] = useState<any>(null);
  const [isEdit, setIsEdit] = useState<any>(null);

  // GET TASKS
  const getTasks = async (categoryName: string, categoryState: any) => {
    const tasks: any[] = [];
    const docsRef = collection(db, categoryName);
    const docsSnap = await getDocs(docsRef);
    docsSnap.forEach((doc: any) => {
      tasks.push({ ...doc.data(), id: doc.id });
      categoryState(tasks);
    });
  };

  // DELETE TASK
  const deleteTask = async (categoryName: string, id: string) => {
    let currentCategoryList: any[] = [];
    switch (categoryName) {
      case "todo":
        currentCategoryList = [tasksTodo, setTasksTodo];
        break;
      case "inprogress":
        currentCategoryList = [tasksInprogress, setTasksInprogress];
        break;
      case "completed":
        currentCategoryList = [tasksCompleted, setTasksCompleted];
        break;
      default:
        console.log("error");
    }

    await deleteDoc(doc(db, categoryName, id));

    const updatedTasks = currentCategoryList[0].filter(
      (item: any) => item.id !== id
    );
    currentCategoryList[1](updatedTasks);
  };

  // MOVE TASK
  const moveTask = async (categoryName: string, id: string) => {
    // new category for task
    let newCategory: any;
    let newCategoryList: any[] = [];
    switch (categoryName) {
      case "todo":
        newCategory = "inprogress";
        newCategoryList = [tasksInprogress, setTasksInprogress];
        break;
      case "inprogress":
        newCategory = "completed";
        newCategoryList = [tasksCompleted, setTasksCompleted];
        break;
      case "completed":
        newCategory = "inprogress";
        newCategoryList = [tasksInprogress, setTasksInprogress];
        break;
      default:
        console.log("error");
    }

    // get task
    const taskRef = doc(db, categoryName, id);
    const task = await getDoc(taskRef);

    if (task.exists()) {
      setDoc(doc(db, newCategory, id), {
        ...task.data(),
        id: id,
        category: newCategory,
      });
    } else {
      console.log("No such document!");
    }
    // delete task from old list
    deleteTask(categoryName, id);

    //update list with moved task
    const updatedTasks = [
      {
        ...task.data(),
        id: id,
        category: newCategory,
      },
      ...newCategoryList[0],
    ];
    newCategoryList[1](updatedTasks);
  };

  // UPDATE TASK
  const updateTask = async (categoryName: string, taskDetails: any) => {

    let currentCategoryList: any[] = [];

    switch (categoryName) {
      case "todo":
        currentCategoryList = [tasksTodo, setTasksTodo];
        break;
      case "inprogress":
        currentCategoryList = [tasksInprogress, setTasksInprogress];
        break;
      case "completed":
        currentCategoryList = [tasksCompleted, setTasksCompleted];
        break;
      default:
        console.log("error");
    }

    // update task in Firebase
    const taskRef = doc(db, categoryName, isEdit.id);
    const editedTask = {
      title: taskDetails.title,
      description: taskDetails.description,
      category: categoryName,
      id: isEdit.id,
    };
    await updateDoc(taskRef, editedTask);

    const updatedTask = currentCategoryList[0].filter(
      (task: any) => task.id !== isEdit.id
    );
    currentCategoryList[1]([editedTask], ...updatedTask);
  };


  // GET ALL TASKS LIST FROM FIREBASE
  useEffect(() => {
    getTasks("todo", setTasksTodo);
    getTasks("inprogress", setTasksInprogress);
    getTasks("completed", setTasksCompleted);
  }, [isModal]);

  return (
    <PageContent>
      <div className="w-full h-full">
        <h2 className="w-full font-bold text-2xl lg:text-3xl mb-10 mt-6">
          Tasks
        </h2>
        <div className="w-full h-full grid grid-col-1 lg:grid-cols-3 lg gap-16">
          <TasksList listName="To Do" id="1" setIsModal={setIsModal}>
            {tasksTodo.map((item) => (
              <TaskCard
                key={item.title + item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                category={item.category}
                deleteTask={deleteTask}
                moveTask={moveTask}
                setIsEdit={setIsEdit}
              />
            ))}
          </TasksList>
          <TasksList listName="In Progress" id="2" setIsModal={setIsModal}>
            {tasksInprogress.map((item) => (
              <TaskCard
                key={item.title + item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                category={item.category}
                deleteTask={deleteTask}
                moveTask={moveTask}
                setIsEdit={setIsEdit}
              />
            ))}
          </TasksList>
          <TasksList listName="Completed" id="3" setIsModal={setIsModal}>
            {tasksCompleted.map((item) => (
              <TaskCard
                key={item.title + item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                category={item.category}
                deleteTask={deleteTask}
                moveTask={moveTask}
                setIsEdit={setIsEdit}
              />
            ))}
          </TasksList>
        </div>
      </div>
      {isModal && (
        <AddTaskModal
          setIsModal={setIsModal}
          listName={isModal}
          isEdit={isEdit}
        />
      )}
      {isEdit && (
        <EditTaskModal
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          updateTask={updateTask}
        />
      )}
    </PageContent>
  );
};

export default Tasks;
