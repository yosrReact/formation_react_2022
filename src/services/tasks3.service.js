import Axios from "axios"
export const header = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})
export const addTask = async (task) => {
  const result = await Axios.post("http://localhost:5000/api/tasks", task)
  return result.data.model
}

export const updateTask = async (id, task) => {
  const result = await Axios.patch(
    "http://localhost:5000/api/tasks/" + id,
    task
  )
  return result.data.model
}

export const deleteTask = async (id) => {
  const result = await Axios.delete("http://localhost:5000/api/tasks/" + id)
  return result.data.model
}

export const fetchTaskById = async (taskId) => {
  const result = await Axios.get("http://localhost:5000/api/tasks/" + taskId)
  return result.data.model
}

export const fetchTasks = async () => {
  // await delay(500)
  const result = await Axios.get("http://localhost:5000/api/tasks")
  return result.data.model
}

export const login = async (credentials) => {
  const result = await Axios.post(
    "http://localhost:5000/api/auth/login",
    credentials
  )
  return result.data.token
}
export const me = async () => {
  // await delay(500)
  const result = await Axios.get("http://localhost:5000/api/auth/me", header())
  return result.data.model
}
