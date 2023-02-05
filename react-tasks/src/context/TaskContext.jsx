import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../components/data/tasks";

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

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
  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <TaskContextProvider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContextProvider>
  );
}

export const TaskContext = createContext();
