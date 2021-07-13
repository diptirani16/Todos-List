import React from 'react'

export default function TodoItem({todo, onDelete}) {
    return (
        <>
        <div>
            <h5>{todo.title}</h5>
            <p>{todo.desc}</p>
            <button type="button" className="btn btn-danger btn-sm mb-3" onClick={() => onDelete(todo)}>Delete</button>
        </div>
        <hr/>
        </> 
    )
}
