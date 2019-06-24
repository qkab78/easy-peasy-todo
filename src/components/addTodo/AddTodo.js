import React, {useState} from 'react';
import {useStoreActions} from 'easy-peasy';
const AddTodo = () => {
    const [title, setTitle] = useState('');
    const add =useStoreActions(actions => actions.add);
    return (
        <form onSubmit={e => {
            e.preventDefault();
            add({title, isCompleted:false});
            setTitle('');
        }} >
            <input type="text" value={title} onChange={e=>{setTitle(e.target.value)}} />
            <input type="submit" value="Add Todo"/>
        </form>
    )
}

export default AddTodo
