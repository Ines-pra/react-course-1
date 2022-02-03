import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppDrag from './Components/DragAndDrop';

// var liste= {
//   title: '',
//   description:'',
//   priority:'',
//   assignedTo: '',
// };

// const listeV = (
//   <div>
//     {/* {liste['title']} */}

//     {
//       validTask
//     }
//   </div>
// )




// function create() {
//   console.log('Create !!');
//   // let div =(document.getElementById('btnCreate') as HTMLInputElement);
//   let div = document.body;
//   let newP = document.createElement('p');
//   newP.textContent = 'Nouvelle liste';
//   div.appendChild(newP);
//   let input = document.createElement('input');
//   input.setAttribute('id','inputV');
//   div.appendChild(input);
//   let btnValid = document.createElement('input');
//   btnValid.setAttribute('type','submit');
//   btnValid.setAttribute('id','btnValid');
//   btnValid.setAttribute('value','Valid the list');
//   div.appendChild(btnValid);
//   // validTask();
// };

// function validTask() {
//   let btnV = document.getElementById('btnValid');
//   btnV?.addEventListener("click", function()
//   {
//   console.log('Valid List !!');
//   let input = (document.getElementById('inputV') as HTMLInputElement).value;
//   liste = {
//       title: 'Liste 1',
//       description:'Test d\'une liste ',
//       priority:'1',
//       assignedTo: '1',
//     };

//     const element = React.createElement(
//       'title',
//       {className: 'test'},
//       liste['title']
//     );
//   return (
//     element
//     );

//   });
// }



// const [task, setTask] = useState<string>("")
ReactDOM.render(
  
  <React.StrictMode>
    <App />
    {/* <div>
      <button onClick={create} id="btnCreate"> Add Task </button>
    </div>
    
    {listeV} */}

    <AppDrag />

  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();