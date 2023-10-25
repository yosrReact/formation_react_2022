import React, { useState, useEffect, useCallback } from "react"
import TaskForm from "../../components/taskForm/TaskForm"
import TasksList from "./../../components/tasksList/TasksList"
import * as api from "../../services/tasks.service"
import Hello from "./../../components/hello/Hello"
import { useFetch } from "../../hooks/useFetch"

function TaskPage() {
  const [isVisible, setIsVisible] = useState(true)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const { data, loading, error, setData } = useFetch(api.fetchTasks)

  const sayHello = () => {
    alert("Hello")
  }

  const addTask = useCallback(
    async (title, duration) => {
      try {
        const newTask = await api.addTask({
          title,
        })
        setData([...data, newTask])
      } catch (e) {
        console.log("error")
      }
    },
    [data, setData]
  )

  const deleteTask = async (id) => {
    try {
      await api.deleteTask(id)
      const newData = data.filter((task) => task._id !== id)
      setData(newData)
    } catch (e) {
      console.log("error")
    }
  }

  const updateTask = async (id, title, duration) => {
    try {
      const newTask = await api.updateTask(id, {
        title,
      })
      const newData = data.map((task) => (task._id === id ? newTask : task))
      setData(newData)
    } catch (e) {
      console.log("error")
    }
  }
  const [searchValue, setSearchValue] = useState("")

  // 3ème forme de useEffect
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true)
  //     if (searchValue.length === 0) {
  //       console.log("data empty")
  //       setData([])
  //       setLoading(false)
  //     } else {
  //       const result = await api.fetchDataByFilter(searchValue)
  //       console.log("data form api : " + searchValue)
  //       setData(result)
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
  //       setData([])
  //       setLoading(false)
  //     } else {
  //       const result = await api.fetchDataByFilter(searchValue)
  //       if (!didCancel) {
  //         console.log("result: ", searchValue)

  //         setData(result)
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
    <div className="data-list">
      <button onClick={() => toggleVisibility()}>Toggle visibility</button>
      <TaskForm addTask={addTask} />

      {error && <div>Error....</div>}
      <Hello />
      {loading ? (
        <div>loading...</div>
      ) : (
        isVisible && (
          <>
            <TasksList
              tasks={data}
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
