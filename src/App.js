import React from 'react'
import Header from './components/Header.js'
import Tasks from './components/Tasks'
import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState(
    // Example array of task objects
    [
      { id: 1, text: "Do laundry", day: "June 17", reminder: true },
      { id: 2, text: "Go to Barber", day: "June 18", reminder: false },
      { id: 3, text: "Grocery shopping", day: "June 19", reminder: true },
    ]
  );

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task, // copy all the existing fields
          reminder: !task.reminder, // but flip this one
        };
      } else {
        return task; // unchanged
      }
    });

    setTasks(updatedTasks);
  };
  
  


  return (
    <div className="App">
      <div className="container">
        <Header title="Task Tracker" />
        {/* <Tasks tasks={tasks} /> */}
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      </div>
    </div>
  );
}


export default App;
