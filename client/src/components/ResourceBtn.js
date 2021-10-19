const ResourceBtn = ({resource, onToggleR,index}) => {


    return( 

        <div  className={`cover ${resource.selected ? 'selectedCover' : ''}`}  >
            
        <button onClick = {() => onToggleR(index,resource._id)
}
            className = 'card'
            >
            {resource.resourceType}

        </button>
        </div>
    )
}

export default ResourceBtn
