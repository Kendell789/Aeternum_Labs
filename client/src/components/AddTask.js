import ResourceBtn from "./ResourceBtn"
import AmountBtn from "./AmountBtn"
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


const AddTask = ( {resource, amount, onToggleR, onToggleA, onAdd } ) => {
    
    const onSubmit = (e) => {
        e.preventDefault()

    }

    const location = useLocation();

    const history = useHistory();
    const redirect = () => {
        onAdd()
        history.push('/', { id:2, text:'re' , val:'r200', resourceTypeReq: 'er'} )
    } 




    return (



        <form className = 'add-form' onSubmit = {onSubmit}  >
            <h1>
            {location.state.name}
            </h1>

            <div className='form-control' >

                <label > What type of wood do you need </label>
                

                   { resource.map((items,index) => <ResourceBtn key = {index} resource = {items} onToggleR={onToggleR}/> ) }


                </div>

            <div className='form-control'>

            <label> How Much?  </label>

                { amount.map((items,index) => <AmountBtn key = {index} amount = {items} onToggleA={onToggleA}/> ) }


            </div>
            
            
           
            
             <input type='button' value='Add Quest' className = 'btn btn-block' onClick = {redirect}/>
        

        </form>
    )
}

export default AddTask