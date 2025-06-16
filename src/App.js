import React from 'react'
import Header from './components/Header.js'
import Tasks from './components/Tasks'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header title='Task Tracker'/>
        <Tasks />
      </div>
    </div>
  );
}


export default App;
