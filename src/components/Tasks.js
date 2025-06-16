import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          style={{ border: "1px solid #ccc", margin: "8px 0", padding: "8px" }}
          task={task} 
        />
      ))}
    </div>
  );
};

export default Tasks;
