const AmountBtn = ({amount, onToggleA,index}) => {


    return( 

        <div  className={`cover ${amount.selected ? 'selectedCover' : ''}`}  >
            
        <button onClick = {() => onToggleA(index,amount._id)}
            className = 'card'
            >
            
            {amount.val}

        </button>
        </div>
    )
}

export default AmountBtn
