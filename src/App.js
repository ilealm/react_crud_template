import './App.css';

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import  'bootstrap/dist/css/bootstrap.min.css'

import TaskView from './components/TaskListView';

function App() {
  const API_SERVER_BASE = process.env.REACT_APP_API_SERVER_BASE
  const API_SERVER_GET_ALL = process.env.REACT_APP_API_SERVER_GET_ALL
  const API_SERVER_RESOURCE = process.env.REACT_APP_API_SERVER_RESOURCE  

  const [taskList, setTaskList] = useState([{}])
  const [task, setTask] = useState('')
  const [location, setLocation] = useState('')

  // Read all the Tasks. This is why I need the useEffect AND axios
  useEffect(() => {
    axios.get(API_SERVER_BASE + API_SERVER_GET_ALL)
    .then(
      res => {setTaskList(res.data)}
    )
  });

  // Post a Task
  const addTaskHandler = () => {
    axios.post(API_SERVER_BASE + API_SERVER_RESOURCE, { 'task':task, 'location':location })
      .then(res => {
        console.log(res)
      })
  }
    

  return (
    <div  className="App list-group-item justify-content-center align-items-cente mx-auto"
          style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px"}} >
      <h1 className='card text-white bg-warning mb-1' styleName="max-width:20rem;" >
        React CRUD Template
      </h1>
      <h6 className='card text-white bg-primary mb-3' >
          Front End
      </h6>

      <div className='card-body'>
        <h5 className='card text-white bg-dark mb-3'>   Add your Task         </h5>
        <span className='card-text'>
          <input className='mb-2 form-control taskIn' 
            placeholder='Task'
            onChange={event => setTask(event.target.value)}  />
          <input className='mb-2 form-control locationIn' 
            placeholder='Location' 
            onChange={event => setLocation(event.target.value)}  />
          <button className='btn btn-outline-primary mx-2 mb-3' 
            style={{'borderRadius':'50px', 'fontWeight':'bold'}}
            onClick={addTaskHandler} 
          > Add Task</button>
        </span>

        <h5 className='card text-white bg-dark mb-3'>   Your Task  </h5>
        <div>
          <TaskView taskList={taskList} />
        </div>
        <h6 className='card text-dark bg-info py-1 mb-0'>
          Copyright Iris Leal 2022, All rights reserved &copy;
        </h6>

      </div>
    </div> 
  );
}

export default App;

