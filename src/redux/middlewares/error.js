export const error = (store) => (next) => (action) => {
  // détecter si l'action se termine par failure
  // après on devra déterminer quel est le type d'erreur qu'on a
  // généralement on peut différencier les erreurs à travers ce qu'on appelle http status code
  const length = "FAILURE".length
  // "FETCH_TASKS_FAILURE"
  // "FETCH_TASKS_REQUEST"
  //
  const suffix = action.type.slice(-length)

  if (suffix === "FAILURE") {
    switch (action.e.status) {
      case 400:
        console.log("400")
        next(action)
        break
      case 401:
        console.log("401")
        next(action)
        break
      case 500:
        console.log("500")
        next(action)
        break

      default:
        next(action)
        break
    }
  }
  next(action)
}
