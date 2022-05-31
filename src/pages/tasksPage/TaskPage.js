import React from "react"
import TaskForm from "../../components/taskForm/TaskForm"
import TasksList from "./../../components/tasksList/TasksList"

function TaskPage() {
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
    <div className="tasks-list">
      <TaskForm sayHello={sayHello} />
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <TasksList tasks={tasks} />
        </>
      )}
    </div>
  )
}

export default TaskPage
