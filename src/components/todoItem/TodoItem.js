import React from 'react'
import {useStoreActions} from 'easy-peasy'
const TodoItem = ({todo}) => {
    const {toggle, remove} = useStoreActions(actions => ({
        remove:actions.remove,
        toggle:actions.toggle,
    }))
    return (
        <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : "none"}} onClick={() => toggle(todo.id)}>
            <span>{todo.title}</span>
            <button onClick={() => remove(todo.id)} >
                <i className="fas fa-trash-alt"></i>
            </button>
        </div>
    )
}

export default TodoItem
