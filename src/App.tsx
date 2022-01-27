import React, { FC , ChangeEvent , useState} from 'react';
import ToDoTask from './Components/TodoTask';
import { ITask } from './Interfaces';

// export default () => <div className="App">React Course 1</div>;

// export default () => <div className="App"> <h1> ToDo List </h1></div>;

const App: FC = () => {
    const [task, setTask] = useState<string>("");
    const [priority, setPriority] = useState<number>(0);
    const [todo, setTodoList] = useState<ITask[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task"){
        setTask(event.target.value);
        } else {
            setPriority(Number(event.target.value));
        };
    };

    const addTask = (): void => {
        const newTask = {taskName: task, priority: priority};
        setTodoList([...todo,newTask]);
        setTask('');
        setPriority(0);
        console.log(todo);
    }

    return (


    <div className="App">
        <h1>ToDo List</h1>
        <div className='header'>
            <div className='containerInput'>
                <input type="text" placeholder='Task' value={task} name ="task" onChange={handleChange} />
                <input type="number" placeholder='Priority of the task' value={priority} name="priority" onChange={handleChange}/>
            </div>
            <button className='btnAdd' onClick={addTask}> Add Task </button>
        </div>
        <div className='todo'> 
            <div className='todoList'>
                <h2>TO DO </h2>
                {todo.map((task: ITask, key: number) => {
                    return <ToDoTask key={key}  task={task} />
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