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
          <Task
            title="learn Html"
            duration={60}
            details={{ difficulty: 8, level: "level 2" }}
          />
          <Task
            title="learn React"
            duration={120}
            details={{ difficulty: 8, level: "level 2" }}
          />
          <Task
            title="learn Angular"
            duration={180}
            details={{ difficulty: 8, level: "level 2" }}
          />
        </>
      )}
    </div>
  )
}

export default App
