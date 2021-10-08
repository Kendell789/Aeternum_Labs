const ResourceBtn = ({resource, onToggle}) => {


    return( 
    <button 
        onClick = {() => onToggle(resource.id)}
        className='btn'>
        
        {resource.resourceType}

    </button>
    
    
    )
}

export default ResourceBtn
