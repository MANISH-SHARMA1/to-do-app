import { configureStore } from "@reduxjs/toolkit";
import toDoListSlice from "./toDoListSlice"; // Import the reducer created using Redux Toolkit

// Configure the Redux store using configureStore function from Redux Toolkit
const store = configureStore({
  reducer: {
    tasksReducer: toDoListSlice, // Add the taskReducer to the store's reducer object
  },
});

export default store;
