import axios from "axios";
import React, {useState}  from "react";

// TODO add spred arg ... to accept the args. ...task, location
function TaskItem(props){
    const API_SERVER_BASE = process.env.REACT_APP_API_SERVER_BASE
    const API_SERVER_RESOURCE = process.env.REACT_APP_API_SERVER_RESOURCE    
    const [location, setLocation] = useState(props.task.location)


    const deleteTaskHandler = (task) => {
        axios.delete(API_SERVER_BASE + API_SERVER_RESOURCE + `${task}`)
        .then(res => console.log(res.data))
        .catch(error => console.error(error))
    // .finally(() => console.log('done'));
    }

    const updateTaskHandler = (task) =>{
        axios.put(API_SERVER_BASE + API_SERVER_RESOURCE + `${task}?location=${location}`)
        .then(res => console.log(res.data))
        .catch(error => console.error(error))
    }

    return(
        <div>
            <p>
                <span style={{'fontWeight':'bold, underline'}}>
                    Task: 
                    <input className='mb-2 form-control taskIn' 
                        value={props.task.task}
                        disabled  />
                <br/>                    
                    Location: 
                    <input className='mb-2 form-control taskIn' 
                        value={location}                        
                        onChange={event => setLocation(event.target.value)}  />
                    </span>
                <br/>
                <button
                    onClick={() => deleteTaskHandler(props.task.task)}
                    className="btn btn-outline-danger my-2 mx-2"
                    style={{'borderRadius':'50px'}}    >
                    X </button>
                <button
                    onClick={() => updateTaskHandler(props.task.task)}
                    className="btn btn-outline-danger my-2 mx-2"
                    style={{'borderRadius':'50px'}}    >
                    Upd </button>
            </p>
            <hr></hr>
        </div>
    )
}

export default TaskItem