import { FaTimes } from "react-icons/fa";

const Task = ({ task, style, onDelete, onToggle }) => {
  return (
    <div
      className="Task"
      style={style}
      onDoubleClick={() => onToggle(task.id)} // 
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0 }}>{task.text}</h3>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </div>
      <p>{task.day}</p>
      <p>Reminder: {task.reminder ? "Yes" : "No"}</p>
    </div>
  );
};

export default Task;
