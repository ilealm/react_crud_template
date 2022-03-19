import TaskItem from "./Task";

function TaskView(props){
    return(
        <div >
            <ul>
                {props.taskList.map(task => <TaskItem key={task.task} task={task} />)}
            </ul>            
        </div>
    )
}

export default TaskView;