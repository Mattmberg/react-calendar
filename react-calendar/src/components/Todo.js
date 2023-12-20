import React, { useContext } from 'react'
import { CalendarContext } from '../context/CalendarContext';

function Todo({todo, style}) {
    const {setTodo} = useContext(CalendarContext);

    return (
        <p style={style} onClick={()=> {setTodo(todo)}}>{todo.name}</p>
    )
}

export default Todo