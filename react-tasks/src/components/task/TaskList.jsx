import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask }) {
  if (tasks.length === 0) return <h1>No hay tareas por el momento.</h1>;
  return (
    <div>
      {tasks.map((t) => (
        <TaskCard task={t} key={t.id} deleteTask={deleteTask}/>
      ))}
    </div>
  );
}

export default TaskList;
