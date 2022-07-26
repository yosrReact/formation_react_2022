export function logger(store) {
  return function (next) {
    return function (action) {
      console.log("state before dispatch", store.getState())

      console.log("action", action)

      const returnValue = next(action)

      console.log("state after dispatch", store.getState())

      return returnValue
    }
  }
}
