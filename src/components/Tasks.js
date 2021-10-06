const tasks = [{
    id:1,
    text: 'heellsa',
    day: 'sadsad',
    reminder:true
}]
const Tasks = () => {
    return (
        <>
            {tasks.map((task)=>(<h3 key = {task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks
