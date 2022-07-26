import * as api from "../../services/tasks.service"
import * as types from "../types"
// export const fetchTasks = async () => {
//   const result = await api.fetchTasks()
//   return {
//     type: types.FETCH_TASKS,
//     tasks: result,
//   }
// }
export const fetchTasks = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: types.FETCH_TASKS_LOADING })

      const result = await api.fetchTasks()
      dispatch({
        type: types.FETCH_TASKS_SUCCESS,
        tasks: result,
      })
    } catch (e) {
      dispatch({ type: types.FETCH_TASKS_FAILURE, e })
    }
  }
}
