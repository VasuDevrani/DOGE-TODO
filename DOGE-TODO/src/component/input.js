import React from 'react'
import './input.css'

export default function Input(props) {
  return (
    <div className='input'>
      <form onSubmit={props.handleSubmit}>
        <input type="text" value={props.newItem} onChange={(e) => props.setItem(e.target.value)} placeholder='✍️ Make new task' className='input-box'/>
        <button className="input-btn" onClick={props.handleSubmit}>+</button>
      </form>
    </div>  
  )
}
