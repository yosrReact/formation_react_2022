import React, { useState } from "react"
import TaskForm from "../../components/taskForm/TaskForm"
import TasksList from "./../../components/tasksList/TasksList"

function TaskPage() {
  const [isVisible, setIsVisible] = useState(true)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const loading = false
  const tasks = [
    {
      _id: "1",
      title: "Learn html",
      duration: 60,
    },
    {
      _id: "2",
      title: "Learn react",
      duration: 30,
    },
    {
      _id: "3",
      title: "Learn node",
      duration: 50,
    },
  ]
  const sayHello = () => {
    alert("Hello")
  }

  return (
    <div>
      {/* 1ère solution */}
      <button onClick={() => toggleVisibility()}>Toggle visibility</button>
      {/* 2ème solution */}
      {/* <button onClick={toggleVisibility}>Toggle visibility</button> */}
      {loading ? (
        <div>loading...</div>
      ) : (
        isVisible && (
          <>
            <TaskForm sayHello={sayHello} />
            <TasksList tasks={tasks} />
          </>
        )
      )}
    </div>
  )
}

export default TaskPage
