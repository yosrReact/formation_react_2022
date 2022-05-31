import React from "react"
import "./Task.css"
export default function Task() {
  function help() {
    return <div>click for help</div>
  }
  return (
    <div className="task" style={{ backgroundColor: "cyan" }}>
      <div className="title">Learn html</div>
      <div className="actions">
        <span>delete</span>
        <span>update</span>
      </div>
      {help()}
    </div>
  )
}
