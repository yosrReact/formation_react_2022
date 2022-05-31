import React from "react"
import TaskForm from "../../components/taskForm/TaskForm"
import Task from "../../components/task/Task"

function TaskPage() {
  const loading = false

  return (
    <div className="tasks-list">
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <TaskForm />
          <Task />
          <Task />
          <Task />
        </>
      )}
    </div>
  )
}

export default TaskPage
