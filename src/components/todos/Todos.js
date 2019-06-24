import React, {useEffect} from 'react'
import {useStoreState, useStoreActions} from 'easy-peasy';
import TodoItem from '../todoItem/TodoItem';
import AddTodo from '../addTodo/AddTodo';

const Todos = () => {
    const todos = useStoreState(state => state.todos);
    const fetchTodos = useStoreActions(actions => actions.fetchTodos);

    useEffect(() => {
        fetchTodos();
    }, [])
    return (
        <div className="todos">
            <h4>Todos</h4>
            <p>Click on the item to complete it</p>
            {todos.map((todo, index)=><TodoItem todo={todo} key={index}/>)}
            <AddTodo/>
        </div>
    )
}

export default Todos
