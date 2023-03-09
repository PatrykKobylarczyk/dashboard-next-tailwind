import React, { useEffect, useState } from "react";
import BasicCard from "./BasicCard";
import { useForm } from "react-hook-form";
import { TfiClose } from "react-icons/tfi";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const EditTaskModal = ({ isEdit, setIsEdit, updateTask }: any) => {
  const { handleSubmit } = useForm();
  const [isSubmited, setIsSubmited] = useState<any>(null);
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
  });

  const handleStateChange = (event: any) => {
    event.preventDefault();
    setTaskDetails((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // get task to display in inputs
  const getTask = async () => {
    const taskRef = doc(db, isEdit.category, isEdit.id);
    const task = await getDoc(taskRef);

    if (task.exists()) {
      setTaskDetails({
        title: task.data().title,
        description: task.data().description,
      });
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getTask();
  }, [isEdit]);

  //   update task
  const onSubmit = () => {
    updateTask(isEdit.category, taskDetails);

    setIsSubmited("Done!");

    setTimeout(() => {
      setIsSubmited("Congratulation!");
    }, 500);
    setTimeout(() => {
      setIsEdit(false);
    }, 800);
  };

  
  return (
    <div className="fixed w-[85%] h-auto sm:w-1/2 sm:h-1/2 z-[100] mx-20">
      <BasicCard>
        <form
          onSubmit={handleSubmit(onSubmit as any)}
          className="relative rounded pt-12 pb-5 px-5"
        >
          <div className="space-y-4 ">
            <h2 className="font-semibold">Save changes</h2>
            <label className="flex flex-col gap-5">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input w-full border-2 border-gray-100 focus:border-Primary outline-none px-4 py-2 rounded-lg"
                onChange={handleStateChange}
                defaultValue={taskDetails.title}
              />

              <textarea
                rows={5}
                name="description"
                placeholder="Description"
                className="input w-full border-2 border-gray-100 focus:border-Primary outline-none px-4 py-2 rounded-lg"
                onChange={handleStateChange}
                defaultValue={taskDetails.description}
              />
            </label>
            <div className="w-full flex justify-end">
              <button className="w-full md:w-1/3 bg-Primary text-white py-3 font-semibold flex justify-center">
                {isSubmited ? isSubmited : "Edit task"}
              </button>
            </div>
          </div>
          <button
            className="absolute top-4 right-5 text-Primary hover:bg-Primary text-xl cursor-pointer"
            onClick={() => setIsEdit(null)}
          >
            <TfiClose />
          </button>
        </form>
      </BasicCard>
    </div>
  );
};

export default EditTaskModal;
