import React from "react"
import "./Task.css"
export default function Task({ title, duration }) {
  function help() {
    return <div>click for help</div>
  }
  return (
    <div className="task" style={{ backgroundColor: "cyan" }}>
      <div className="title">{title}</div>
      <div className="title">{duration}</div>
      {/* <div className="title">{details.level}</div> */}

      <div className="actions">
        <span>delete</span>
        <span>update</span>
      </div>
      {help()}
    </div>
  )
}

// export default function Task(props) {
//   function help() {
//     return <div>click for help</div>
//   }
//   return (
//     <div className="task" style={{ backgroundColor: "cyan" }}>
//       <div className="title">{props.title}</div>
//       <div className="title">{props.duration}</div>
//       {/* <div className="title">{props.details.level}</div> */}

//       <div className="actions">
//         <span>delete</span>
//         <span>update</span>
//       </div>
//       {help()}
//     </div>
//   )
// }
