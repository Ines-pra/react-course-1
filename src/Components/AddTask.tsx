import React, { FC , ChangeEvent , useState} from 'react';
import { task } from '../Interfaces';

const AddTask: FC = () => {
    const [task, setTask] = useState<string>("");
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

    const addTask = (): void => {
        const newTask = {id: task, name: name, priority: priority, description: description, assignedTo: assignedTo};
        setTodo([...todo,newTask]);
        setTask('');
        setName('');
        setDescription('');
        setPriority(0);
        setAssigned('');
        console.log(todo);
    };

    return(
        <div>
            <div className='containerInput'>
                <div>
                <input type="text" placeholder='Name' value={name} name="name" onChange={handleChange} />
                     <input type="text" placeholder='Description of the task' value={description} name="description" onChange={handleChange} />
                    <input type="number" placeholder='Priority of the task' value={priority} name="priority" onChange={handleChange} />
                </div>
               <div>
                    <button className='btnAdd' onClick={addTask}> Ajouter </button>  
               </div>
               {todo.map(({ id, description, name, priority }, index ) => {
                                    return (
                                        <div>

                                            <p> {id} </p>
                                            <p> {name} </p>  
                                            <p> {description} </p> 
                                            <p> {priority} </p>

                                        </div>
                                           )
                                    })}
            </div>  
            
        </div>
    )
}

export default AddTask;