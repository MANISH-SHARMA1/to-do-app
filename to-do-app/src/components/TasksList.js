import React from "react";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../redux/toDoListSlice";

function TasksList() {
  // Get dispatch function to dispatch actions
  const dispatch = useDispatch();
  // Select tasks from the Redux store state
  const tasks = useSelector((state) => state.tasksReducer.tasks);

  return (
    <div>
      <p className="text-center text-3xl text-blue-800 font-semibold">
        Tasks List
      </p>
      {/* Render the list of tasks */}
      <div className="flex justify-center mt-5">
        <ul>
          {tasks?.map((task) => (
            <li
              key={task.id}
              className="border-2 border-blue-800 rounded text-blue-800 font-semibold gap-5 px-2 py-1 my-3 w-80 flex items-center justify-between"
            >
              <span
                onClick={() => dispatch(toggleTask(task.id))}
                className="cursor-pointer"
              >
                {task.completed ? "✔" : "◻"}{" "}
              </span>
              <p>{task.task}</p>
              <p
                onClick={() => dispatch(deleteTask(task.id))}
                className="cursor-pointer"
              >
                <MdDelete />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TasksList;
