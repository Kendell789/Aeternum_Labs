import Button from "./Button"

const Header = ({ title, onPush, TODO}) => {


    return (
        <header className='header'>
            <h1>{title}</h1>
            
            <Button text = 'Weavers Needed'onPush = {onPush}/>
            <Button text = 'Tanners Needed'onPush = {onPush}/>
            <Button text = 'Stonemasons Needed'onPush = {onPush}/>
            <Button text = 'Metalworkers Needed'onPush = {onPush}/>
            <Button text = 'Carpenters Needed'onPush = {onPush}/>
            <Button text = 'Lumberjacks Needed'onPush = {onPush}/>
            <Button text = 'Hunters Needed'onPush = {onPush}/>
            <Button text = 'Harvesters Needed'onPush = {onPush}/>
            <Button text = 'Supplies Needed'onPush = {onPush}/>
            <Button text = 'Weaponsmithing'onPush = {onPush}/>
            <Button text = 'Armorsmithing'onPush = {onPush}/>
            <button  className='btn' onClick = {TODO}> Cooks Needed </button>
            <button  className='btn' onClick = {TODO}> FisherFolk Needed </button>
            <button  className='btn' onClick = {TODO}> Alchemists Needed </button>
            <button  className='btn' onClick = {TODO}> Hunt </button>
            
            

        </header>
    )
}

Header.defaultProps={
    title: 'Task Tracker',
  }


//   CSS
//   const headingStyle={
//       color: 'red',S
//       backgroundColor: 'black'
//   }

export default Header
