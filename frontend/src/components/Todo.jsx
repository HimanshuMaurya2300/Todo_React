import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'

const Todo = ({ text, updateTodo, deleteTodo }) => {
    return (
        <div className='todo'>

            <div className="text">{text}</div>

            <div className="icons">
                <BiEdit className='edit-icon' onClick={updateTodo} />
                <AiFillDelete className='delete-icon' onClick={deleteTodo} />
            </div>
        </div>
    )
}

export default Todo