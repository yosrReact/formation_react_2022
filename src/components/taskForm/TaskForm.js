import React from "react"
import "./TaskForm.css"
export default function TaskForm() {
  const addTask = "Add a task"
  const steps = ["Enter the task title", "Click on add task"]

  return (
    <div className="task-form">
      <ul>
        {steps.map((step) => (
          <li>{step}</li>
        ))}
      </ul>
      <input type="text" name="task" id="" />
      <button className="button">{addTask}</button>
    </div>
  )
}
