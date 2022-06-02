import React, { useState, useEffect } from "react"
import "./App.css"
import Hello from "./components/hello/Hello"
import TaskPage from "./pages/tasksPage/TaskPage"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Menu from "./components/menu/Menu"
import TaskDetails from "./components/taskDetails/TaskDetails"
import TeacherRoutes from "./components/teacherRoutes/TeacherRoutes"
import { me } from "./services/tasks2.service"
import Login from "./pages/login/Login"

function App() {
  const token = localStorage.getItem("token")

  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const user = await me()
        setUser(user)
        console.log("user: ", user)
      } catch (e) {}
    }
    fetchMe()
  }, [])
  if (token && user.role === "admin") {
    // private routes
    return (
      <div className="app">
        <Router>
          <Menu />
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/teachers/tasks" replace />}
            />
            <Route path="/hello" element={<Hello />} />
            <Route path="teachers/*" element={<TeacherRoutes />} />
            {/* <Route path="/tasks" element={<TaskPage />} />
          <Route path="/tasks/:id" element={<TaskDetails />} /> */}
          </Routes>
        </Router>
      </div>
    )
  } else if (token && user.role === "user") {
    return (
      <div className="app">
        <Router>
          <Menu />
          {/* ... */}
        </Router>
      </div>
    )
  } else if (!token) {
    // public routes
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    )
  } else {
    return <div>loading...</div>
  }
}

export default App
