import { Route, Routes, useLocation } from "react-router-dom"
import TaskPage from "./../../pages/tasksPage/TaskPage"
import TaskDetails from "../taskDetails/TaskDetails"

function TeacherRoutes() {
  // useMatch()
  // useLocation()
  console.log("useLocation(): ", useLocation())
  //   const { path } = useMatch()
  //   console.log("path: ", path)
  return (
    <>
      <Routes>
        <Route path="tasks" element={<TaskPage />} />
        <Route path="tasks/:id" element={<TaskDetails />} />
      </Routes>
    </>
  )
}
export default TeacherRoutes
