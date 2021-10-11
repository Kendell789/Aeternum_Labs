const ResourceBtn = ({resource, onToggle}) => {


    return( 

        <div  className={`cover ${resource.selected ? 'selectedCover' : ''}`}  >
            
        <div onClick = {() => onToggle(resource.id)}
            className = 'card'
            >
            
            {resource.resourceType}

        </div>
        </div>
    )
}

export default ResourceBtn
