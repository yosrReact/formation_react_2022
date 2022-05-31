import React, { useState } from "react"
import TaskForm from "../../components/taskForm/TaskForm"
import TasksList from "./../../components/tasksList/TasksList"

function TaskPage() {
  const [isVisible, setIsVisible] = useState(true)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const loading = false
  const [tasks, setTasks] = useState([
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
  ])
  const sayHello = () => {
    alert("Hello")
  }
  const addTask = (title) => {
    setTasks([...tasks, { _id: Math.random() + "", title }])
  }
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task._id !== id)
    setTasks(newTasks)
  }

  return (
    <div className="tasks-list">
      {/* 1ère solution */}
      <button onClick={() => toggleVisibility()}>Toggle visibility</button>
      {/* 2ème solution */}
      {/* <button onClick={toggleVisibility}>Toggle visibility</button> */}
      <TaskForm addTask={addTask} />

      {loading ? (
        <div>loading...</div>
      ) : (
        isVisible && (
          <>
            <TasksList tasks={tasks} deleteTask={deleteTask} />
          </>
        )
      )}
    </div>
  )
}

export default TaskPage
