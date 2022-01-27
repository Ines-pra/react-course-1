import React from 'react'
import { ITask } from "../Interfaces";

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const ToDoTask = ({task, completeTask}: Props) => {
    return (
        <div className='tasks'>
            <div className='task'>
                <p> Task : {task.taskName} </p>
                <p> Priority : {task.priority}</p>
            </div>
            <div >
                <button className='btnDelete' onClick={() => {completeTask(task.taskName)}}> X </button>
            </div>
        </div>
    )
}

export default ToDoTask