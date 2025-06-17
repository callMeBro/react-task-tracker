import React, { useState } from "react";
import Header from "./components/Header.js";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask.js";

function App() {
  const [showAddTask, setShowAddTask] = useState(true);

  const [tasks, setTasks] = useState([
    { id: 1, text: "Do laundry", day: "June 17", reminder: true },
    { id: 2, text: "Go to Barber", day: "June 18", reminder: false },
    { id: 3, text: "Grocery shopping", day: "June 19", reminder: true },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task) => {
    // 1. Generate a random id between 1 and 10,000
    const id = Math.floor(Math.random() * 10000) + 1;

    // 2. Create a new task object by combining the generated id with the passed task properties
    const newTask = { id, ...task };

    // 3. Update the tasks state by adding the new task to the existing tasks array
    setTasks([...tasks, newTask]);
  };


  return (
    <div className="App">
      <div className="container">
        <Header
          title="Task Tracker"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      </div>
    </div>
  );
}

export default App;
