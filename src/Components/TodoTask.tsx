import React from 'react'
import { ITask } from "../Interfaces";

interface Props {
    task: ITask;
}

const ToDoTask = ({task}: Props) => {
    return (
        <div className='tasks'>
            <div className='task'>
                <p> Task : {task.taskName} </p>
                <p> Priority : {task.priority}</p>
            </div>
            <div >
                <button className='btnDelete' > X </button>
            </div>
        </div>
    )
}

export default ToDoTask