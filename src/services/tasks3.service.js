let tasks = [
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

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const fetchTasks = () => {
  // await delay(3000)
  // throw new Error("No tasks")
  return tasks
}
export const fetchTasksByFilter = (searchValue) => {
  // await delay(1000)
  return tasks.filter((task) => task.title.includes(searchValue))
}

export const fetchTaskById = (id) => {
  // await delay(1000)
  const task = tasks.find((task) => task._id === id)
  return task
}

export const addTask = (task) => {
  // await delay(1000)
  const newTask = {
    _id: Math.random(),
    title: task.title,
    duration: task.duration,
  }

  tasks = tasks.concat(newTask)
  return newTask
}

export const deleteTask = (id) => {
  // await delay(1000)
  tasks = tasks.filter((task) => task._id !== id)
}

export const updateTask = (id, task) => {
  // await delay(1000)
  const updatedTask = { _di: id, title: task.title, duration: task.duration }
  tasks = tasks.map((task) => (task._id === id ? updatedTask : task))
  return updatedTask
}
