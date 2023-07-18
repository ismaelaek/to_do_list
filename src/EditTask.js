import React from 'react';
import './EditTaskStyle.css'
function EditTask({ task, onSave, onClose, isOpen }) {
    const [editedName, setEditedName] = React.useState(task.name);
    const [editedHour, setEditedHour] = React.useState(task.time.split(':')[0]);
    const [editedMinute, setEditedMinute] = React.useState(task.time.split(':')[1]);
    const [editedPriority, setEditedPriority] = React.useState(task.priority);

    const handleNameChange = (event) => {
        setEditedName(event.target.value);
    };

    const handleHourChange = (event) => {
        let hour = parseInt(event.target.value);
        if (hour < 24 && hour >= 0) {
        setEditedHour(hour.toString());
        }
    };

    const handleMinuteChange = (event) => {
        let mins = parseInt(event.target.value);
        if (mins >= 0 && mins < 60) {
        setEditedMinute(mins.toString());
        }
    };

    const handlePriorityChange = (event) => {
        setEditedPriority(event.target.value);
    };

    const handleSave = () => {
        const editedTime = `${editedHour.padStart(2, '0')}:${editedMinute.padStart(2, '0')}`;
        const editedTask = {...task,
        name: editedName,
        time: editedTime,
        priority: editedPriority,
        };
        onSave(editedTask);
    };

    return (
        <div className={`edit-task ${isOpen ? 'show' : ''}`}>
        <h2>Edit Task</h2>
        <input
            type="text"
            value={editedName}
            onChange={handleNameChange}
            placeholder="Task Name"
        />
        <input
            type="number"
            value={editedHour}
            onChange={handleHourChange}
            placeholder="HH"
        />
        <input
            type="number"
            value={editedMinute}
            onChange={handleMinuteChange}
            placeholder="MM"
        />
        <select value={editedPriority} onChange={handlePriorityChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <div className="edit-task-buttons">
            <button onClick={handleSave}>Save</button>
            <button onClick={onClose}>Cancel</button>
        </div>
        </div>
    );
}

export default EditTask;
