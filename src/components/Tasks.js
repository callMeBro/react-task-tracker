import React from "react";
import { useState } from 'react'

const Tasks = () => {



const [tasks, setTasks] = useState(  // Example array of task objects
    [
      { id: 1, text: "Do laundry", day: "June 17", reminder: true },
      { id: 2, text: "Go to Barber", day: "June 18", reminder: false },
      { id: 3, text: "Grocery shopping", day: "June 19", reminder: true },
    ])

  return (
    // tasks.push()
    setTasks({...tasks, {}})
    
    
    
    <div>
        
    
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{ border: "1px solid #ccc", margin: "8px 0", padding: "8px" }}
        >
          <h3>{task.text}</h3>
          <p>{task.day}</p>
          <p>Reminder: {task.reminder ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
