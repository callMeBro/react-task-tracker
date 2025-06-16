import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            style={{
              border: "1px solid #ccc",
              margin: "8px 0",
              padding: "8px",
            }}
            task={task}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p style={{ textAlign: "center", color: "gray", marginTop: "1rem" }}>
          No tasks to show 🚫
        </p>
      )}
    </div>
  );
};

export default Tasks;
