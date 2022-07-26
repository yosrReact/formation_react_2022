import React, { useState, useEffect } from "react"
import TaskForm from "../../components/taskForm/TaskForm"
import TasksList from "./../../components/tasksList/TasksList"
import * as api from "../../services/tasks.service"
import { useDispatch } from "react-redux"
import { fetchTasks } from "./../../redux/actions/tasks.actions"
import { useSelector } from "react-redux"

function TaskPage() {
  const [isVisible, setIsVisible] = useState(true)
  const dispatch = useDispatch()
  const tasks = useSelector((store) => store.tasks)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  // const [tasks, setTasks] = useState([])
  const sayHello = () => {
    alert("Hello")
  }

  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)
  useEffect(() => {
    dispatch(fetchTasks())
  }, [])

  const addTask = async (title, duration) => {
    // try {
    //   setLoading(true)
    //   const newTask = await api.addTask({
    //     title,
    //   })
    //   setTasks([...tasks, newTask])
    //   setLoading(false)
    // } catch (e) {
    //   console.log("error")
    // }
  }
  const deleteTask = async (id) => {
    // try {
    //   setLoading(true)
    //   await api.deleteTask(id)
    //   const newTasks = tasks.filter((task) => task._id !== id)
    //   setTasks(newTasks)
    //   setLoading(false)
    // } catch (e) {
    //   console.log("error")
    // }
  }

  const updateTask = async (id, title, duration) => {
    // try {
    //   setLoading(true)
    //   const newTask = await api.updateTask(id, {
    //     title,
    //   })
    //   const newTasks = tasks.map((task) => (task._id === id ? newTask : task))
    //   setTasks(newTasks)
    //   setLoading(false)
    // } catch (e) {
    //   console.log("error")
    // }
  }
  const [searchValue, setSearchValue] = useState("")

  // 3ème forme de useEffect
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true)
  //     if (searchValue.length === 0) {
  //       console.log("tasks empty")
  //       setTasks([])
  //       setLoading(false)
  //     } else {
  //       const result = await api.fetchTasksByFilter(searchValue)
  //       console.log("tasks form api : " + searchValue)
  //       setTasks(result)
  //       setLoading(false)
  //     }
  //   }
  //   console.log("searchValue", searchValue)
  //   fetchData()
  // }, [searchValue])

  // 4ème forme de useEffect
  // useEffect(() => {
  //   let didCancel = false
  //   const fetchData = async () => {
  //     setLoading(true)
  //     if (!searchValue) {
  //       setTasks([])
  //       setLoading(false)
  //     } else {
  //       const result = await api.fetchTasksByFilter(searchValue)
  //       if (!didCancel) {
  //         console.log("result: ", searchValue)

  //         setTasks(result)
  //         setLoading(false)
  //       }
  //     }
  //   }
  //   // console.log("useEffect:", searchValue)
  //   fetchData()

  //   return () => {
  //     console.log("cleanup: ", searchValue)
  //     didCancel = true
  //   }
  // }, [searchValue])

  return (
    <div className="tasks-list">
      <button onClick={() => toggleVisibility()}>Toggle visibility</button>
      <TaskForm addTask={addTask} />
      {tasks.error && <div>Error....</div>}

      {tasks.loading ? (
        <div>loading...</div>
      ) : (
        isVisible && (
          <>
            <TasksList
              tasks={tasks.list}
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
