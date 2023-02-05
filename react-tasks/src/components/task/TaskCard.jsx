
function TaskCard({ task, deleteTask }) {
  return (
    <div>
      <h1>{task.name}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task)}>Eliminar</button>
    </div>
  );
}

export default TaskCard;
