import React from "react"
import "./App.css"
import TaskForm from "./components/taskForm/TaskForm"
import Task from "./components/task/Task"
import Hello from "./components/hello/Hello"

function App() {
  const loading = false
  return (
    <div className="tasks-list">
      {loading ? (
        <div>loading ...</div>
      ) : (
        <>
          <Hello />
          <TaskForm />
          <Task />
          <Task />
          <Task />
        </>
      )}
    </div>
  )
}

export default App
