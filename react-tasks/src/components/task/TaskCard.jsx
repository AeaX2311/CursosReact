import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.name}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        onClick={() => deleteTask(task)}
        className="bg-red-400 px-2 py-1 rounded-md mt-5 text-center hover:bg-red-300"
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;
