import TaskList from "./components/task/TaskList";
import TaskForm from "./components/task/TaskForm";
import { tasks as data } from "./components/data/tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        name: task.name,
        description: task.descripcion,
      },
    ]);
  }

  function deleteTask(task) {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>
  );
}

export default App;
