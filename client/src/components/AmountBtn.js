const AmountBtn = ({amount, onToggleA,index,Apressed }) => {

    function calls(){
        onToggleA(index,amount._id)
        Apressed()
    }

    return( 

        <div  className={`cover ${amount.selected ? 'selectedCover' : ''}`}  >
            
        <button onClick = {() => calls() }
            className = 'card'
            >
            
            {amount.val}

        </button>
        </div>
    )
}

export default AmountBtn
