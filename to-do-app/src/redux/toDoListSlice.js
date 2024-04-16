import { createSlice } from "@reduxjs/toolkit";

// Create a slice using Redux Toolkit
const toDoListSlice = createSlice({
  name: "tasks",

  // Define initial state for tasks, retrieving from local storage if available
  initialState: {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  },
  reducers: {
    // Define reducer functions for adding, deleting, and toggling tasks
    addTask: (state, action) => {
      const item = action.payload.attributes;
      // Add a new task to the tasks array
      const newTask = item
        ? {
            id: item.id,
            task: item.task,
            completed: false,
          }
        : action.payload;
      state.tasks.push(newTask); // Mutate the state to add the new task
      localStorage.setItem("tasks", JSON.stringify(state.tasks)); // Update local storage
    },

    deleteTask: (state, action) => {
      // Delete a task based on its ID
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId); // Filter out the task to delete
      localStorage.setItem("tasks", JSON.stringify(state.tasks)); // Update local storage
    },

    toggleTask: (state, action) => {
      // Toggle the completion status of a task
      const taskId = action.payload;

      state.tasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ); // Toggle the completed property of the task
      localStorage.setItem("tasks", JSON.stringify(state.tasks)); // Update local storage
    },
  },
});

// Export action creators and reducer
export const { addTask, deleteTask, toggleTask } = toDoListSlice.actions;

export default toDoListSlice.reducer;
