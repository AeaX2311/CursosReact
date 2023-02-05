import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0)
    return (
      <h1 className="text-2xl font-bold mb-3 text-center text-white">
        No hay tareas por el momento.
      </h1>
    );
  return (
    <div className="grid grid-cols-4 gap-3">
      {tasks.map((t) => (
        <TaskCard task={t} key={t.id} />
      ))}
    </div>
  );
}

export default TaskList;
