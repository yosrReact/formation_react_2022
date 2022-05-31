import { Outlet, Route, Routes, useLocation } from "react-router-dom"
import TaskPage from "./../../pages/tasksPage/TaskPage"

function TeacherRoutes() {
  // useMatch()
  // useLocation()
  console.log("useLocation(): ", useLocation())
  //   const { path } = useMatch()
  //   console.log("path: ", path)
  return (
    <>
      <Outlet />
    </>
  )
}
export default TeacherRoutes
