const AmountBtn = ({amount, onToggleA,index}) => {


    return( 

        <div  className={`cover ${amount.selected ? 'selectedCover' : ''}`}  >
            
        <div onClick = {() => onToggleA(index,amount._id)}
            className = 'card'
            >
            
            {amount.val}

        </div>
        </div>
    )
}

export default AmountBtn
