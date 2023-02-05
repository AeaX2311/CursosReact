import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function clear() {
  document.getElementById("txtTask").value = "";
  document.getElementById("txtDescription").value = "";
}

function TaskForm() {
  const [name, setName] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ name, descripcion });
    clear();
  };

  return (
    <div className="max-w-md mx-auto mb-3">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10">
        <h1 className="text-2xl font-bold mb-3 text-white">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          id="txtTask"
          placeholder="Escribe tu tarea"
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          id="txtDescription"
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe una descipcion"
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
        <button className="bg-green-400 px-2 py-1 rounded-md text-center w-full hover:bg-green-300">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
