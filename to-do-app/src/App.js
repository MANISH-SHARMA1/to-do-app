import TasksInput from "./components/TasksInput";
import TasksList from "./components/TasksList";

function App() {
  return (
    <div className="bg-gradient-to-r from-orange-400 py-5">
      <p className="text-center text-3xl text-blue-800 font-semibold py-2">
        To Do App
      </p>
      {/* Component to input the task */}
      <TasksInput />
      {/* Component to show all the tasks in a list */}
      <TasksList />
    </div>
  );
}

export default App;
