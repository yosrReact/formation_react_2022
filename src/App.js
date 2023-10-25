import React from "react"
import "./App.css"
import Hello from "./components/hello/Hello"
import TaskPage from "./pages/tasksPage/TaskPage"
import useScreenSize from "./hooks/useScreenSize"

function App() {
  const { isMobile } = useScreenSize()
  console.log("isMobile in app: ", isMobile)
  return (
    <div className="app">
      {/* {isMobile && <Hello />} */}
      <TaskPage />
    </div>
  )
}

export default App
