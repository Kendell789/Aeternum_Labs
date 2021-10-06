import Button from "./Button"

const Header = ({ title }) => {
    const cooksNeededf = () =>{
        console.log('What type or Food do you need to Cook')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color = 'green' text = 'cooksNeeded' onClick={cooksNeededf}/>
            <Button color = 'green' text = 'weaversNeeded'/>
            <Button color = 'green' text = 'fisherFolkNeeded'/>
            <Button color = 'green' text = 'huntersNeeded'/>
            <Button color = 'green' text = 'metalWorkersNeeded'/>
            <Button color = 'green' text = 'alchemistsNeeded'/>
            <Button color = 'green' text = 'harvestersNeeded'/>
            <Button color = 'green' text = 'carpentersNeeded'/>
            <Button color = 'green' text = 'stoneMasonNeeded'/>
            <Button color = 'green' text = 'lumberJacksNeeded'/>
            <Button color = 'green' text = 'suppliesNeeded'/>
            <Button color = 'green' text = 'armorSmithing'/>
            <Button color = 'green' text = 'weaponSmithing'/>
            <Button color = 'green' text = 'hunt'/>

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
