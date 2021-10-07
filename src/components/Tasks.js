import Task from './Task'
const Tasks = ({ tasks, onDelete}) => {
    return (
        //setTasks([...tasks,])
        <>
            {tasks.map((task)=>(
            <Task key = {task.id} task = {task}
            onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Tasks
