import React from "react"
import TaskForm from "../../components/taskForm/TaskForm"
import Task from "../../components/task/Task"

function TaskPage() {
  const loading = false

  return (
    <div className="tasks-list">
      <TaskForm />
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
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

export default TaskPage
