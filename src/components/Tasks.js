import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderLeft: task.reminder
                ? "5px solid green"
                : "5px solid transparent",
            }}
          />
        ))
      ) : (
        <p>No tasks to show.</p>
      )}
    </>
  );
};

export default Tasks;
