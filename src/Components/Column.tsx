import React, { FC, useState } from "react";
import initialData from "../config/data";
import { col , task, tasks} from "../Interfaces";
import Task from "./Task";
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    column: col;
    tasks: task[];
}

const Column = ({column,tasks}: Props) => {
        
    const [data, setData] = useState(initialData);

    // console.log(column);
    // console.log(tasks);
    return (
        // <div>
            <div className="column">
                <h3> {column.title} </h3>
                <Droppable droppableId={column.id}>
                    {provider => (
                    <div {...provider.droppableProps} ref={provider.innerRef} className="droppable">
                        {tasks.map((task:task, index:number) =>(
                            <Task key={task.id} task={task} index={index}/>
                        ))} 
                    </div>
                    )}
                </Droppable>
            </div>
          
           
                
        // </div>
        )
}

export default Column


