import React, { useContext } from 'react'
import { CalendarContext } from '../context/CalendarContext'

function Header() {
    const {date, setDate} = useContext(CalendarContext);
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const addMonth = (value) => {        
        const tmp = new Date(date.setMonth(date.getMonth() + value));
        setDate(tmp);
    }

    return (
        <header>
            <div className="month">
                <h1>{monthNames[date.getMonth()]} {date.getFullYear()}</h1>
            </div>
            <div className="nav">
                <button className="button button-white" onClick={()=>addMonth(-1)}>Prev</button>
                <button className="button button-white" onClick={()=>setDate(new Date())}>Today</button>
                <button className="button button-white" onClick={()=>addMonth( 1)}>Next</button>
            </div>            
        </header>
    )
}

export default Header