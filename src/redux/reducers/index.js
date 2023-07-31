import { combineReducers } from "redux"
import { tasks } from "./tasks.reducers"
export const rootReducers = () => {
  return combineReducers({
    tasks,
  })
}
