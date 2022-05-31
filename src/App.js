import React from "react"
import "./App.css"
import Hello from "./components/hello/Hello"
import TaskPage from "./pages/tasksPage/TaskPage"

function App() {
  return (
    <div className="tasks-list">
      <Hello />
      <TaskPage />
    </div>
  )
}

export default App
