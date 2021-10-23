import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';

const Button = ({color,text,onPush}) => {

    const history = useHistory();

    const goToReceiver = () => {
        onPush({text})

        if(text === "Armorsmithing"){
        history.push("/addwa");
        }else if (text === "Weaponsmithing"){
        history.push("/addwa");
        }else{
        history.push("/add");
        }
    }  

    return( 
    <button
        onClick={goToReceiver}
        style= {{backgroundColor:color}} 
        className='btn'>
        {text}
    </button>
    )
}

Button.prototype={
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,

}

export default Button
