
import React, { useState } from 'react';
import Entity from './Entity';
import EditTask from './EditTask';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskHour, setTaskHour] = useState('');
  const [taskMinute, setTaskMinute] = useState('');
  const [taskPriority, setTaskPriority] = useState('low');
  const [taskDone, setTaskDone] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


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

  const handleEdit = (index) => {
    setEditingTask(tasks[index]);
    setIsDrawerOpen(true);
  };
  const handleSaveEdit = (editedTask) => {
    const updatedTasks = [...tasks];
    const editingTaskIndex = tasks.findIndex((task) => task === editingTask);
    updatedTasks[editingTaskIndex] = editedTask;
    setTasks(updatedTasks);
    setIsDrawerOpen(false);
    setEditingTask(null);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setEditingTask(null);
  };


  const AddToDo = () => {
  if (taskName.trim() !== '' && taskHour !== '' && taskMinute !== '') {
    const time = `${taskHour.padStart(2, '0')}:${taskMinute.padStart(2, '0')}`;
    const newTask = {
      name: taskName,
      time: time,
      priority: taskPriority,
      done: taskDone
    };
    const sortedTasks = [...tasks, newTask].sort((a, b) => {
      // Convert the time strings to Date objects for comparison to sort the tasks array based on the task time
      const timeA = new Date(`2023-01-01T${a.time}`);
      const timeB = new Date(`2023-01-01T${b.time}`);
      return timeA - timeB; 
    });

    setTasks(sortedTasks);
    setTaskName('');
    setTaskHour('');
    setTaskMinute('');
    setTaskPriority('low');
    setTaskDone(false);
  }
};
  const DeleteToDo = (inx) => {
    let NewArr = [...tasks];
    NewArr.splice(inx, 1);
    setTasks(NewArr);
  }
  const handleDoneBtn = (index)=> {
    const updatedStutus = [...tasks];
    updatedStutus[index].done = !updatedStutus[index].done;
    setTasks(updatedStutus);
  }
  
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
          {tasks.map((task, index) => (
            <div className={`task ${task.done ? 'done' : ''}`} key={index}>
              <div >
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => handleDoneBtn(index)}
                />
              </div>
              <div className={task.done ? 'doneText' : ''}>
                {task.name}
              </div>
              <div className={task.done ? 'doneText' : ''}>
                {task.time}
              </div>
              <div className={task.done ? 'doneText' : ''}>
                {task.priority}
              </div>
              <div className="action">
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDoneBtn(index)}>Done</button>
                <button onClick={() => DeleteToDo(index)}>Delete</button>
              </div>
            </div>
          ))}
      </div>
      {isDrawerOpen && (
        <div className="drawer">
          <EditTask
            task={editingTask}
            onSave={handleSaveEdit}
            onClose={handleCloseDrawer}
            isOpen={isDrawerOpen}
          />
        </div>
      )}
    </div>
  );
}

export default App;
