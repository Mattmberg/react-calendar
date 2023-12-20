import React, { useContext } from 'react';
import { CalendarContext, sameDay } from '../context/CalendarContext';
import { contrastColor } from '../utilities/contrastColor';
import Todo from './Todo';

function Day({day, date}) {

    const {setTodo, setDate} = useContext(CalendarContext);

    const getStyle = (color)=> {
        return { background: color, color: contrastColor(color)};
    }
    const selected = sameDay(day.date, date);
    const style = (day.date.getMonth() !== date.getMonth() ? ' disabled':'') 
                + (sameDay(day.date, new Date()) ? ' current-day':'') 
                + (selected ? ' selected-day':'')
    return (
        <div className={`day ${style}`} onClick={()=>setDate(day.date)}>  
            <div className="todo-day">       
                <div className="todos">
                    {day.todos.map(todo=>(
                        <Todo key={todo.id} todo={todo} style={getStyle(todo.color)}/>
                    ))}
                </div>
                <h3> {day.date.getDate()} </h3>
            </div>   
            {selected ? <div className="button button-blue add-button" onClick={()=>setTodo({})}>+</div> : null}
        </div>
    )
}

export default Day;