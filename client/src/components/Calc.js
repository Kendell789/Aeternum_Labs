import { useHistory } from "react-router"


const Calc = () => {
const history = useHistory()

const goToReceiver=()=>{
    history.push("/calc")
}

    return (
        <button className = 'btn-calculate'
            onClick={goToReceiver}
            >
            Total Materials Needed
        </button>
    )
}

export default Calc
