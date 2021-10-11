import { useState } from 'react'
import ResourceBtn from "./ResourceBtn"

const AddTask = ( {resource, onToggle} ) => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }   
    return (


            // <button className = 'type-select' onClick={() => onToggle(resource.id)}>
            //     {resource.resourceType}
            // </button>

        <form className = 'add-form' onSubmit = {handleSubmit}  >

            <div className='form-control' >

                <label > What type of wood do you need </label>
                   { resource.map((items,index) => <ResourceBtn key = {index} resource = {items} onToggle={onToggle}  /> ) }
                </div>

            <div className='form-control'>

            <label> How Much?  </label>


            {/* <button className = 'type-select' onClick={() => onToggle(resource.id)}>
                this name{resource.resourceType}
                
            </button> */}

            <button className='btn'>
                5
            </button >
            <button className='btn'>
                50
            </button>

            <button className='btn'>
                125
            </button>



        </div>
            
            
            <input type='submit' value='Save Material' className = 'btn btn-block'/>

        </form>
    )
}

export default AddTask