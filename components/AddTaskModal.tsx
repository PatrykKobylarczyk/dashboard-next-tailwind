import React, { useEffect, useState } from "react";
import BasicCard from "./BasicCard";
import { useForm } from "react-hook-form";
import { TfiClose } from "react-icons/tfi";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const AddTaskModal = ({ setIsModal, title }: any) => {
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

  const collectionName = title.toLowerCase().split(" ").join("");

  const onSubmit = async () => {
    setIsSubmited("Done!");
    const taskRef = collection(db, collectionName);
    await setDoc(doc(taskRef), {
      title: taskDetails.title,
      description: taskDetails.description,
      category: collectionName
    });
    setTimeout(() => {
      setIsSubmited("Congratulation!");
    }, 500);
    setTimeout(() => {
      setIsModal(null);
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
            <h2 className="font-semibold">Add task &quot;{title}&quot;</h2>
            <label className="flex flex-col gap-5">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input w-full border-2 border-gray-100 focus:border-Primary outline-none px-4 py-2 rounded-lg"
                onChange={handleStateChange}
              />

              <textarea
                rows={5}
                name="description"
                placeholder="Description"
                className="input w-full border-2 border-gray-100 focus:border-Primary outline-none px-4 py-2 rounded-lg"
                onChange={handleStateChange}
              />
            </label>
            <div className="w-full flex justify-end">
              <button className="w-full md:w-1/3 bg-Primary text-white py-3 font-semibold flex justify-center">
                {isSubmited ? isSubmited : "Add task"}
              </button>
            </div>
          </div>
          <button
            className="absolute top-4 right-5 text-Primary hover:bg-Primary text-xl cursor-pointer"
            onClick={() => setIsModal(null)}
          >
            <TfiClose />
          </button>
        </form>
      </BasicCard>
    </div>
  );
};

export default AddTaskModal;
