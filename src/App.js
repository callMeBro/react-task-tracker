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

  return (
    <div className="App">
      <div className='container'>
        <Header title='Task Tracker'/>
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}


export default App;
