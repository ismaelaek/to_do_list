// import { AddToDo } from './Comps';
// import {Toaster} from 'react-hot-toast'
import React, { useState } from 'react';
import Entity from './Entity';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskHour, setTaskHour] = useState('');
  const [taskMinute, setTaskMinute] = useState('');
  const [taskPriority, setTaskPriority] = useState('low');

  const handleNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleHourChange = (event) => {
    let hour = parseInt(event.target.value);
    if (hour < 24 && hour >= 0) {
      setTaskHour(hour.toString());
    }
  };

  const handleMinuteChange = (event) => {
    let mins = parseInt(event.target.value);
    if (mins >= 0 && mins < 60) {
      setTaskMinute(mins.toString());
    }
  };

  const handlePriorityChange = (event) => {
    setTaskPriority(event.target.value);
  };

  const AddToDo = () => {
    if (taskName.trim() !== '' && taskHour !== '' && taskMinute !== '') {
      const time = `${taskHour.padStart(2, '0')}:${taskMinute.padStart(2, '0')}`;
      const newTask = {
        name: taskName,
        time: time,
        priority: taskPriority
      };
      setTasks([...tasks, newTask]);
      setTaskName('');
      setTaskHour('');
      setTaskMinute('');
      setTaskPriority('low');
    }
  };
  
  return (
    <div className="App">
      <h1>Todo List</h1>
      
      <div className="addNew">
        <input
          type="text"
          value={taskName}
          onChange={handleNameChange}
          placeholder="Task Name"
        />

          <input
            type="number"
            value={taskHour}
            onChange={handleHourChange}
            placeholder="HH"

          />

          <input
            type="number"
            value={taskMinute}
            onChange={handleMinuteChange}
            placeholder="MM"

          />

        <select value={taskPriority} onChange={handlePriorityChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={AddToDo}>Add Task</button>
      </div>
      <div className="tasksList">
        
        <Entity params = {tasks} />
          {tasks.map((task) => (
            <div className="task">
              <div className="taskName">
                {task.name}
              </div>
              <div className="taskTime">
                {task.time}
              </div>
              <div className="taskPriority">
                {task.priority}
              </div>
            {/* <li>
              Task: {task.name} | Time: {task.time} | Priority: {task.priority}
            </li> */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
