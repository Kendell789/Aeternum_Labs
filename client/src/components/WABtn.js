const WABtn = ({resource,onToggleR,onToggleA,index,Rpressed,amount}) => {

    function calls(){
        onToggleR(index,resource._id)
        Rpressed()
        onToggleA(amount)
        console.log(amount)
    }

    return( 

        <button onClick = {() =>  calls()}
            className = 'WAbtn'
            >
            {resource.resourceType}
        </button>
    )
}

export default WABtn
