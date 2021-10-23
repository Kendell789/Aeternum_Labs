import WABtn from "./WABtn"
import { useHistory } from 'react-router-dom'
import { VscArrowDown } from "react-icons/vsc";
import { useState } from "react";



const AddWA = ( {resource, onToggleR,onToggleA, onAdd, quest,Rready,Rpressed  } ) => {
    const onSubmit = (e) => {
        e.preventDefault()
    }

    const history = useHistory();
    var WAamount = "sa";
    var displayResource = resource.filter(resource => {
        return resource.quest === quest.text
      })

      console.log(displayResource)

      console.log(WAamount)


    const redirect = () => {
        if (false === false){ alert ("Coming Soon...These quests will get added on the bottom but the logic to calculate there impact on total resource count has not been added yet")}
        onAdd()
        history.push('/', )
        // history.go(0)
        
    } 
    return (

        <>

            <h1>
            {quest.text}
            </h1>
            <div className = "wrapper">
            <div className= "WA-dropdown" data-dropdown>
            <button class="WA-card" data-dropdown-button onclick = {WAamount = "Crude Iron"}>Crude Iron&nbsp;</button>
            <div className= "WA-dropdown-menu" style={{fontSize: "25px"}}>
            {displayResource.map((items,index) => <WABtn key = {index} index = {index} onToggleR={onToggleR} onToggleA = {onToggleA} Rpressed ={Rpressed} resource = {items} amount = {WAamount}/>) }
            </div>
            </div>
            <div className= "WA-dropdown" data-dropdown>
            <button class="WA-card" data-dropdown-button onclick = {WAamount = "Iron"}>Iron&nbsp;</button>
            <div className= "WA-dropdown-menu" style={{fontSize: "25px"}}>
            {displayResource.map((items,index) => <WABtn key = {index} index = {index} onToggleR={onToggleR} onToggleA = {onToggleA} Rpressed ={Rpressed} resource = {items} amount = {WAamount}/>) }
            </div>
            </div>
            <div className= "WA-dropdown" data-dropdown>
            <button class="WA-card" data-dropdown-button onclick = {WAamount = "Steel"}>Steel</button>
            <div className= "WA-dropdown-menu" style={{fontSize: "25px"}}>
            {displayResource.map((items,index) => <WABtn key = {index} index = {index} onToggleR={onToggleR} onToggleA = {onToggleA} Rpressed ={Rpressed} resource = {items} amount = {WAamount}/>) }
            </div>
            </div>
            <div className= "WA-dropdown" data-dropdown>
            <button class="WA-card" data-dropdown-button onclick = {WAamount = "Starmetal"}>Starmetal&nbsp;</button>
            <div className= "WA-dropdown-menu" style={{fontSize: "25px"}}>
            {displayResource.map((items,index) => <WABtn key = {index} index = {index} onToggleR={onToggleR} onToggleA = {onToggleA} Rpressed ={Rpressed} resource = {items} amount = {WAamount}/>) }
            </div>
            </div>

            </div>
            
             <input type='button' value='Add Quest' className = 'btn btn-block' onClick = {redirect}/>
        
            </>
    )
}

export default AddWA