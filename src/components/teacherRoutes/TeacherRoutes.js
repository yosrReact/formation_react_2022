import { Route, Routes, useLocation } from "react-router-dom"
import TaskPage from "./../../pages/tasksPage/TaskPage"

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
      </Routes>
    </>
  )
}
export default TeacherRoutes
