import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';

const Button = ({color,text,onPush}) => {

    const history = useHistory();

    const goToReceiver = () => {
        onPush({text})
        history.push("/add",{
                        name: text});
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
