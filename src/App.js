import React from "react"
import "./App.css"
import TaskForm from "./components/taskForm/TaskForm"
import Task from "./components/task/Task"
import Hello from "./components/hello/Hello"

function App() {
  return (
    <div className="tasks-list">
      <Hello />
      <TaskForm />
      <Task />
      <Task />
      <Task />
    </div>
  )
}

export default App
