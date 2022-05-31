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

  const updateTask = (id, title) => {
    const newTasks = tasks.map((task) =>
      task._id === id ? { _id: id, title } : task
    )
    setTasks(newTasks)
  }

  return (
    <div className="tasks-list">
      <button onClick={() => toggleVisibility()}>Toggle visibility</button>
      <TaskForm addTask={addTask} />

      {loading ? (
        <div>loading...</div>
      ) : (
        isVisible && (
          <>
            <TasksList
              tasks={tasks}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          </>
        )
      )}
    </div>
  )
}

export default TaskPage
