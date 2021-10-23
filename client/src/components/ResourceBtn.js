import { useState } from "react";

const ResourceBtn = ({resource, onToggleR,index, Rpressed }) => {

    function calls(){
        onToggleR(index,resource._id) 
        Rpressed()
    }

    return( 

        <button className='Resource-cover' >
            
        <div onClick = {() =>  calls()}
            className = 'card'
            >
            {resource.resourceType}

        </div>
        </button>
    )
}

export default ResourceBtn
