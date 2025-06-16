const Task = ({ task, style }) => {
  return (
    <div className="Task" style={style}>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <p>Reminder: {task.reminder ? "Yes" : "No"}</p>
    </div>
  );
};

export default Task;
