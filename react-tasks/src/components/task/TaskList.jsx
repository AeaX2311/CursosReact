import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) return <h1>No hay tareas por el momento.</h1>;
  return (
    <div>
      {tasks.map((t) => (
        <TaskCard task={t} key={t.id} />
      ))}
    </div>
  );
}

export default TaskList;
