import ResourceBtn from "./ResourceBtn"
import AmountBtn from "./AmountBtn"
import { useHistory } from 'react-router-dom'


const AddTask = ( {resource, amount, onToggleR, onToggleA, onAdd, quest,Aready,Rready,Apressed,Rpressed  } ) => {
    
    const onSubmit = (e) => {
        e.preventDefault()


    }

    const history = useHistory();

    var displayResource = resource.filter(resource => {
        return resource.quest === quest.text
      })

    var displayAmount = amount.filter(amount => {
        return quest.text === amount.quests
      })

    const redirect = () => {
        if (Rready === false){ alert ("Please select a RESOURCE and amount before Adding Quest")}
        else if (Aready === false) {alert (" Please Select an AMOUNT and resource before adding Quest")}
        else{ 
        onAdd()
        history.push('/', )
        // history.go(0)
        }


    } 




    return (



        <form className = 'add-form' onSubmit = {onSubmit}  >
            <h1>
            {quest.text}
            </h1>

            <div className='form-control' >

                <label > What type of resource do you need </label>
                

                   {displayResource.map((items,index) => <ResourceBtn key = {index} index = {index} resource = {items} onToggleR={onToggleR} Rpressed = {Rpressed}/> ) }


                </div>

            <div className='form-control'>

            <label> How Much?  </label>
                    
                { displayAmount.map((items,index) => <AmountBtn key = {index} amount = {items} index = {index} onToggleA={onToggleA} Apressed = {Apressed} /> ) }


            </div>
            
            
           
            
             <input type='button' value='Add Quest' className = 'btn btn-block' onClick = {redirect}/>
        

        </form>
    )
}

export default AddTask