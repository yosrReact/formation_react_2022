import React from "react"
import TaskForm from "../../components/taskForm/TaskForm"
import Task from "../../components/task/Task"

function TaskPage() {
  return (
    <div className="tasks-list">
      <TaskForm />
      <Task />
      <Task />
      <Task />
    </div>
  )
}

export default TaskPage
