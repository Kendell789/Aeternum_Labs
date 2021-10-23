import { useState } from "react";

const AmountBtn = ({amount, onToggleA,index,Apressed }) => {

    function calls(){
        onToggleA(index,amount._id)
        Apressed()
        
    }

    return( 

        <button className='Amount-cover'  >

        <div onClick = {() => calls() }
            className = 'card'
            >
            
            {amount.val}

        </div>
        </button>
    )
}

export default AmountBtn
