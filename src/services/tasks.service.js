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

export const fetchTasks = async () => {
  await delay(3000)
  // throw new Error("No tasks")
  return tasks
}
export const fetchTasksByFilter = async (searchValue) => {
  await delay(1000)
  return tasks.filter((task) => task.title.includes(searchValue))
}

export const fetchTaskById = async (id) => {
  await delay(1000)
  const task = tasks.find((task) => task._id === id)
  return task
}

export const addTask = async (task) => {
  await delay(1000)
  const newTask = {
    _id: Math.random(),
    title: task.title,
    duration: task.duration,
  }

  tasks = tasks.concat(newTask)
  return newTask
}

export const deleteTask = async (id) => {
  await delay(1000)
  tasks = tasks.filter((task) => task._id !== id)
}

export const updateTask = async (id, taskToUpdate) => {
  await delay(1000)
  let updatedTask = {}
  tasks = tasks.map((task) => {
    if (task._id === id) {
      updatedTask = { ...task, ...taskToUpdate }
      return updatedTask
    }
    return task
  })

  return updatedTask
}
