import React, { FC , ChangeEvent , useState} from 'react';
import { task } from "../Interfaces";
import { Draggable } from 'react-beautiful-dnd';

interface Props {
    task: task;
    index:number;
}

// const Task = () => {

const Task = ({task,index}: Props) => {

    return ( 
        <Draggable draggableId={task.id.toString()} index={index}>
            {(provider) => (
                <div ref={provider.innerRef} 
                            {...provider.draggableProps} 
                            {...provider.dragHandleProps}
                            className="task"> 

                        <p> {task.name} </p>
                        <p> {task.description} </p>
                        <p> {task.priority} </p>
                
                </div>
                
            )}
        </Draggable>
        )
}

export default Task;