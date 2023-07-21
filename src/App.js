import React from "react"
import "./App.css"
import Hello from "./components/hello/Hello"
import TaskPage from "./pages/tasksPage/TaskPage"
import ExampleSass from "./pages/exampleSass/ExampleSass"

function App() {
  return (
    <div className="app">
      {/* <Hello />
      <TaskPage /> */}
      <ExampleSass />
    </div>
  )
}

export default App
