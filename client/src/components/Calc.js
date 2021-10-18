import { useHistory } from "react-router"


const Calc = () => {
const history = useHistory()

const goToReceiver=()=>{
    history.push("/calc")
}

    return (
        <button
            onClick={goToReceiver}
            >
            Calculate ! 
            All the stuff from the quests saved
        </button>
    )
}

export default Calc
