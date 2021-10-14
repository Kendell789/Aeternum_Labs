const ResourceBtn = ({resource, onToggleR}) => {


    return( 

        <div  className={`cover ${resource.selected ? 'selectedCover' : ''}`}  >
            
        <div onClick = {() => onToggleR(resource.id)}
            className = 'card'
            >
            
            {resource.resourceType}

        </div>
        </div>
    )
}

export default ResourceBtn
