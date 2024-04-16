import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/toDoListSlice";

function TasksInput() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  // function to handle submit task
  const submitTask = (e) => {
    try {
      e.preventDefault();
      // create a unique id each time a task created
      const id = uuidv4();
      // dispatch the task to add to the store
      dispatch(addTask({ id, task }));
      setTask("");
    } catch (error) {
      console.log("error occur: ", error);
    }
  };

  return (
    <div className="flex justify-center text-blue-800">
      {/* form to fill the task and submit it */}
      <form onSubmit={submitTask} className="my-16 font-semibold ">
        <div className="flex flex-col gap-2">
          <label htmlFor="task" className="text-lg">
            Enter your task:
          </label>
          <textarea
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border-2 border-blue-800 bg-orange-200 w-80 h-80 p-2 rounded outline-none"
          />
        </div>

        <input
          type="submit"
          value="Add"
          className="border-2 border-blue-800 rounded px-2 cursor-pointer mt-5 "
        />
      </form>
    </div>
  );
}

export default TasksInput;
