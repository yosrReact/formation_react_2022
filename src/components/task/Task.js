import React from 'react'
import './Task.css'
export default function Task() {  
    return (
      <div className="task">
        <div className="title">Learn html</div>
        <div className="actions">
          <span>delete</span>
          <span>update</span>
        </div>
      </div>
    )
}
