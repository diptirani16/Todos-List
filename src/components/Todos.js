import React from 'react'
import TodoItem from '../components/TodoItem'

export default function Todos(props) {
    let myStyle = {
        minHeight: "50vh"
    }
    return (
        <div className="container my-3" style={myStyle}>
            <h4 className="my-3">Todos List</h4>
            {props.todo.length === 0 ? "No todos to display": 
            props.todo.map((todo) => {
              return  (
                    <TodoItem todo = {todo} key={todo.sno} onDelete = {props.onDelete}/>
                    )

            })
        }
        </div> 
    )
}
