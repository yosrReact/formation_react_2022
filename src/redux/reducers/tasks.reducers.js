import * as types from "../types"
const initialState = {
  list: [],
  loading: false,
  errors: false,
}
export const tasks = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TASKS_LOADING:
      return { ...state, loading: true, error: false }
    case types.FETCH_TASKS_SUCCESS:
      return { ...state, list: action.tasks, loading: false }
    case types.FETCH_TASKS_FAILURE:
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}
