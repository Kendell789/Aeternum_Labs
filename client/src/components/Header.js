import Button from "./Button"

const Header = ({ title, onPush }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text = 'Cooks Needed' onPush = {onPush}/>
            <Button text = 'Weavers Needed'onPush = {onPush}/>
            <Button text = 'Fisher Folk Needed'onPush = {onPush}/>
            <Button text = 'Hunters Needed'onPush = {onPush}/>
            <Button text = 'Metal Workers Needed'onPush = {onPush}/>
            <Button text = 'Alchemists Needed'onPush = {onPush}/>
            <Button text = 'Harvesters Needed'onPush = {onPush}/>
            <Button text = 'Carpenters Needed'onPush = {onPush}/>
            <Button text = 'StoneMason Needed'onPush = {onPush}/>
            <Button text = 'LumberJacks Needed'onPush = {onPush}/>
            <Button text = 'Supplies Needed'onPush = {onPush}/>
            <Button text = 'ArmorSmithing'onPush = {onPush}/>
            <Button text = 'WeaponSmithing'onPush = {onPush}/>
            <Button text = 'Hunt'onPush = {onPush}/>

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
