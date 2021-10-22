const ResourceBtn = ({resource, onToggleR,index, Rpressed }) => {

    function calls(){
        onToggleR(index,resource._id) 
        Rpressed()
    }

    return( 

        <div  className={`cover ${resource.selected ? 'selectedCover' : ''}`}  >
            
        <button onClick = {() =>  calls()}
            className = 'card'
            >
            {resource.resourceType}

        </button>
        </div>
    )
}

export default ResourceBtn
