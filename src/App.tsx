import React, { FC , ChangeEvent , useState} from 'react';
import ToDoTask from './Components/TodoTask';
import { ITask } from './Interfaces';
// export default () => <div className="App"> <h1> ToDo List </h1></div>;

const App: FC = () => {
    const [task, setTask] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [priority, setPriority] = useState<number>(0);
    const [assignedTo, setAssigned] = useState<string>("todo");
    const [todo, setTodoList] = useState<ITask[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task"){
            setTask(event.target.value);
        } else if (event.target.name === "priority") {
            setPriority(Number(event.target.value));
        } else if (event.target.name === "description") {
            setDescription(event.target.value);
        } 
        // else if (event.target.name === "assignedTo") {
        //     setAssigned(event.target.value);
        // }
        ;
    };

    const addTask = (): void => {
        const newTask = {taskName: task, priority: priority, description: description, assignedTo: assignedTo};
        setTodoList([...todo,newTask]);
        setTask('');
        setDescription('');
        setPriority(0);
        setAssigned('');
        console.log(todo);
    };

    const completeTask = (taskNameToDelete: string): void => {
        setTodoList(todo.filter((task) => {
            return task.taskName !== taskNameToDelete
        }))
    };

    return (

    <div className="App">
        <h1>ToDo List</h1>
        <div className='header'>
            <div className='containerInput'>
                <input type="text" placeholder='Task' value={task} name ="task" onChange={handleChange} />
                <input type="text" placeholder='Description of the task' value={description} name="description" onChange={handleChange}/>
                <input type="number" placeholder='Priority of the task' value={priority} name="priority" onChange={handleChange}/>
                {/* <input type="text" placeholder='Assigned To' value={assignedTo} name="assignedTo" onChange={handleChange}/> */}
                {/* <input type='select' value={assignedTo} name='assignedTo' onChange={handleChange}>
                    <option value="todo"> To Do </option>
                    <option value="finish"> Finish </option>
                </input> */}
            </div>
            <button className='btnAdd' onClick={addTask}> Add Task </button>
        </div>
        <div className='todo'> 
            <div className='todoList'>
                <h2>TO DO </h2>
                {todo.map((task: ITask, key: number) => {
                    return <ToDoTask key={key}  task={task} completeTask={completeTask}/>
                })}
            </div>
            <div className='todoList'>
                <h2>FINISH </h2>
            </div>
        </div> 
      </div>

    )
    };


    export default App;