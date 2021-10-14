const AmountBtn = ({amount, onToggleA}) => {


    return( 

        <div  className={`cover ${amount.selected ? 'selectedCover' : ''}`}  >
            
        <div onClick = {() => onToggleA(amount.id)}
            className = 'card'
            >
            
            {amount.val}

        </div>
        </div>
    )
}

export default AmountBtn
