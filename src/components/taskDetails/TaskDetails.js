import React, { useEffect, useState } from "react"
import { fetchTaskById } from "../../services/tasks.service"
import { useParams, useLocation } from "react-router-dom"
function TaskDetails() {
  const [task, setTask] = useState({})

  const { id } = useParams()
  console.log("useParams(): ", useParams())
  console.log("useLocation(): ", useLocation())

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTaskById(id)
        setTask(result)
      } catch (e) {}
    }
    fetchData()
  }, [id])

  return (
    <div className="task-details">
      <h1>Task details</h1>
      <div>
        <b>Title:</b> {task.title}
      </div>
    </div>
  )
}

export default TaskDetails
