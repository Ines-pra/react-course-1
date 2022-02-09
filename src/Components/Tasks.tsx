import React, { FC , ChangeEvent , useState} from 'react';
import initialData from "../config/data"
import Column from "./Column";
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { task } from "../Interfaces";
import AddTask from './AddTask';

const Tasks : FC = () => {

    const [data, setData] : any = useState(initialData);
    // console.log(data);

    const onDragEnd = (result: DropResult) => {        
        const {source, destination, draggableId} = result

        if (!destination) {
            return
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        const colStart = data.columns[source.droppableId]
        const colFinish = data.columns[destination.droppableId]

        if ( colStart === colFinish ){
            const column = data.columns[source.droppableId]
            const newTaskIds = Array.from(column.taskIds)
            newTaskIds.splice(source.index, 1)
            newTaskIds.splice(destination.index, 0, draggableId)

            const newColumn = {
                ...column,
                taskIds: newTaskIds,
            }

            const newState = {
                ...data,
                columns : {
                    ...data.columns,
                    [newColumn.id]: newColumn,
                },
            }

            setData(newState)
            return
        }

        const startTaskIds = Array.from(colStart.taskIds)
        startTaskIds.splice(source.index,1)
        const newStart = {
            ...colStart,
            taskIds : startTaskIds 
        }

        const finishTaskIds = Array.from(colFinish.taskIds)
        finishTaskIds.splice(destination.index, 0, draggableId)
        const newFinish = {
            ...colFinish,
            taskIds : finishTaskIds,
        }

        const newState = {
            ...data,
            columns : {
                ...data.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        }
        setData(newState)
    }

    const [task, setTask] = useState<string>("task-5");
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [priority, setPriority] = useState<number>(0);
    const [assignedTo, setAssigned] = useState<string>("column-1");
    const [todo, setTodo] = useState<task[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "name"){
            setName(event.target.value);
        } else if (event.target.name === "task") {
            setTask(event.target.value);
        } else if (event.target.name === "priority") {
            setPriority(Number(event.target.value));
        } else if (event.target.name === "description") {
            setDescription(event.target.value);
        }
    };

    // const addTask = (): void => {
    //     console.log('Tache ajoutee !!')
    //     console.log(task)
    //     // console.log(name);
    //     // console.log(description);
    //     // console.log(priority);
    //     console.log(data)
    //     // const newTask = Array.from(todo)
  
    //     const newTask = {id: task, name: name, priority: priority, description: description};
    //     setTodo([...todo,newTask]);
    //     const finalTask = Array.from(todo)
    //     finalTask.splice(5,0,todo)

    //     console.log(todo)

    //     const newState = {
    //         ...data,
    //         columns:{
    //             // "column-1":{
    //             //     id:"column-1",
    //             //     taskIds:["task"]
    //             // },
    //             // "column-2":{
    //             //     id:"column-2",

    //             // },
    //             // "column-3":{
    //             //     id:"column-3",

    //             // }
    //         },
    //         tasks:
    //         {
    //             "task":{
    //                 id:"task",
    //                 name:name,
    //                 description:description,
    //                 priority:priority
    //             }
              
    //         },
    //         // columns:{
    //         //     "columns-1": {
    //         //         taskIds: task
    //         //     },
    //     }
    //     // console.log(newState)
    //     // setData(newState)
    
      
    //     // setTask('');
    //     // setName('');
    //     // setDescription('');
    //     // setPriority(0);
    //     // setAssigned('');
    //     // console.log(todo);
    // };

    return (
        <div className="App">
            <h1>Tasks</h1>
            <div className="add">
            <div>
            {/* <div className='containerInput'>
                <div>
                    <input type="text" placeholder='Name' value={name} name="name" onChange={handleChange} />
                    <input type="text" placeholder='Description of the task' value={description} name="description" onChange={handleChange} />
                    <input type="number" placeholder='Priority of the task' value={priority} name="priority" onChange={handleChange} />

                </div>
               <div>
                 <button className='btnAdd' onClick={addTask}> Ajouter </button>  
                  
               </div>
            </div>   */}
            </div>
            <AddTask />
            
        
            </div>
            <div className="container">
                <DragDropContext onDragEnd={onDragEnd}>
                    {data.columnOrder.map((columnId: string) => {
                        const column = data.columns[columnId];
                        const tasks = column.taskIds.map((taskId: string) => data.tasks[taskId]);
                        return <Column key={column.id} column={column} tasks={tasks} />
                    })}
                </DragDropContext>
            </div> 
        </div>
        )
}

export default Tasks;