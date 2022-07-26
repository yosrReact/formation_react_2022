import { combineReducers } from "redux"
import { tasks } from "./tasks.reducer"
export const rootReducers = () => {
  return combineReducers({
    tasks,
  })
}
