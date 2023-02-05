import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div>
      <h1>{task.name}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task)}>Eliminar</button>
    </div>
  );
}

export default TaskCard;
