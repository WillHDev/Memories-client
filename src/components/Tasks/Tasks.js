import React from 'react'
import { useSelector } from 'react-redux';

export default function Tasks() {
    const tasks = useSelector( (state) => state.tasks);
    console.log(tasks)
    return (
        <div>
            <h1>Tasks</h1>
        </div>
    )
}
