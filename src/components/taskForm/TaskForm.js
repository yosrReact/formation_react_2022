import React from 'react'
import './TaskForm.css'
export default function TaskForm() {
    return (
      <div className="task-form">
        <input type="text" name="task" id="" />
        <button className="button">Add a task</button>
      </div>
    )
}
