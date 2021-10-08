import { useState } from 'react'

const AddTask = ( {resource, onToggle} ) => {
    
    return (


            <button className = 'type-select' onClick={() => onToggle(resource.id)}>
                {resource.resourceType}
            </button>



        // help me
        // <form className = 'add-form'>

        //     <div className='form-control'>

        //         <label> What type of wood do you need </label>
               
               
        //         <button className = 'type-select' onClick={() => onToggle(resource.id)}>
        //             this name{resource.resourceType}

        //         </button>

        //     </div>
            
        //     <input type='submit' value='Save Material' className = 'btn btn-block'/>

        // </form>
    )
}

export default AddTask