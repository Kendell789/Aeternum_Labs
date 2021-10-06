import Task from './Task'
const Tasks = ({ tasks}) => {
    return (
        //setTasks([...tasks,])
        <>
            {tasks.map((task)=>(
            <Task key = {task.id} task = {task}/>
            ))}
        </>
    )
}

export default Tasks
