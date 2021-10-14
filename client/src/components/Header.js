import Button from "./Button"

const Header = ({ title, onAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text = 'Cooks Needed' onClick={onAdd}/>
            <Button text = 'Weavers Needed'/>
            <Button text = 'Fisher Folk Needed'/>
            <Button text = 'Hunters Needed'/>
            <Button text = 'Metal Workers Needed'/>
            <Button text = 'Alchemists Needed'/>
            <Button text = 'Harvesters Needed'/>
            <Button text = 'Carpenters Needed'/>
            <Button text = 'StoneMason Needed'/>
            <Button text = 'LumberJacks Needed'/>
            <Button text = 'Supplies Needed'/>
            <Button text = 'ArmorSmithing'/>
            <Button text = 'WeaponSmithing'/>
            <Button text = 'Hunt'/>

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
