import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
    return (
        <div className = 'task'>
            <h3>
                {task.text}{' '} 
                <FaTimes 
                    style={{
                    background: '#9e947e',
                    borderRadius: '50%',
                    color:'red', 
                    cursor:'pointer',
                    position:'absolute',
                    display: 'inline-block',
                    top:'-10',
                    right: '-10'
                    }}
                 onClick={() => onDelete(task.id)}
                 />
            </h3>
            <p className = 'p'>{task.resourceAmountReq} {task.resourceTypeReq}</p>
        </div>
    )
}

export default Task
