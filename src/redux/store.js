import { rootReducer } from "./reducers"
import { configureStore } from "@reduxjs/toolkit"
import { logger } from "redux-logger"
import { error } from "./middlewares/error"

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, error),
  devTools: process.env.NODE_ENV !== "production",
})
console.log("store", store.getState())

export default store
