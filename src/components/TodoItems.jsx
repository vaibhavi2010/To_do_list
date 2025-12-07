import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({ item, toggleTask, deleteTask }) => {
  return (
    <div className='flex items-center my-3 gap-2'>

      {/* ---- Tick icon (toggle complete) ---- */}
      <div className='flex flex-1 items-center cursor-pointer' onClick={() => toggleTask(item.id)}>
        <img
          src={item.isComplete ? tick : not_tick}
          alt=""
          className='w-7'
        />

        <p className={`ml-4 text-[17px] ${item.isComplete ? "line-through text-slate-400" : "text-slate-700"}`}>
          {item.text}
        </p>
      </div>

      {/* ---- Delete icon ---- */}
      <img
        src={delete_icon}
        alt=""
        className='w-4 cursor-pointer'
        onClick={() => deleteTask(item.id)}
      />
    </div>
  )
}

export default TodoItems
