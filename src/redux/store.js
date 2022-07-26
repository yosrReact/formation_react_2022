import { applyMiddleware, compose, createStore } from "redux"
import thunk from "redux-thunk"
import { logger } from "./middlewares/logger"
// import logger from "redux-logger"
import { rootReducers } from "./reducers"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//create store
export const store = createStore(
  rootReducers(),
  composeEnhancers(applyMiddleware(thunk, logger))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
