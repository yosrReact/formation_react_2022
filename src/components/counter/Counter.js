import { memo, useState } from "react"
function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="hello">
      <p>Hello</p>
      <div>Salut</div>
      <div>Count: {count}</div>
      <button
        onClick={() => {
          //   setCount(count + 1)
          //   setCount(count + 1)
          //   setCount(count + 1)
          setCount((prevCount) => prevCount + 1)
          setCount((prevCount) => prevCount + 1)
          setCount((prevCount) => prevCount + 1)
        }}
      >
        Increment
      </button>
    </div>
  )
}

export default Counter
