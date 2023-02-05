import { useState } from "react";

function clear() {
  document.getElementById("txtTask").value = "";
  document.getElementById("txtDescription").value = "";
}

function TaskForm({ createTask }) {
  const [name, setName] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ name, descripcion });
    clear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input id="txtTask"
        placeholder="Escribe tu tarea"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <textarea id="txtDescription"
        placeholder="Escribe una descipcion"
        onChange={(e) => setDescripcion(e.target.value)}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
