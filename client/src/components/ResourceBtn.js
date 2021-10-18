const ResourceBtn = ({resource, onToggleR,index}) => {


    return( 

        <div  className={`cover ${resource.selected ? 'selectedCover' : ''}`}  >
            
        <div onClick = {() => onToggleR(index,resource._id)}
            className = 'card'
            >
            
            {resource.resourceType}

        </div>
        </div>
    )
}

export default ResourceBtn
