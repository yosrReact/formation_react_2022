import { rootReducer } from "./reducers"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: rootReducer,
})
console.log("store", store.getState())

export default store
