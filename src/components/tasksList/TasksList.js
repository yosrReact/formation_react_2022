import React from "react"
import Task from "./../task/Task"
export default function TasksList(props) {
  return (
    <div className="tasks-list">
      {props.tasks.map((task) => (
        <Task
          key={task._id}
          id={task._id}
          title={task.title}
          duration={task.duration}
          deleteTask={props.deleteTask}
          updateTask={props.updateTask}
        />
      ))}
    </div>
  )
}

{
  /* {task.description}
        </Task> */
}
