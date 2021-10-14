import { useState } from 'react'
import { BrowserRouter as Router,Route} from 'react-router-dom' 
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import ApiCall from './components/ApiCall'

function App() {

  const [tasks,setTasks] = useState([])

  const [resources,setResources] = useState([
    
    {id:0, resourceType:'Green Wood', selected:false},
    {id:1,  resourceType:'Aged Wood', selected:false},
    {id:2,  resourceType:'Lumber', selected:false},
    {id:3,  resourceType:'Timber', selected:false}
  ])

  const [amounts,setAmounts] = useState([
    {id:0, val:150, selected:false },
    {id:1,  val:200, selected:false },
    {id:2,  val:250, selected:false },
    {id:3,  val:300, selected:false },
  ])


  //Delete Task
  const deleteTask = (id) => {
    console.log('delete',id)
    setTasks(tasks.filter((task) => task.id !== id))
            }
            
  //Toggle Selected Resource        
  const toggleSelectedR = (id) => {
    resources.map((resource, i) => {
      if(id === i){
        resource.selected = true;
      }else{
        resource.selected = false;
      }
      setResources([...resources.slice(0, i), resource])
    })
  }

  //Toggle Selected Amount
  const toggleSelectedA = (id) => {
    amounts.map((amount, i) => {
      if(id === i){
        amount.selected = true;
      }else{
        amount.selected = false;
      }
      setAmounts([...amounts.slice(0, i), amount])
    })
  }
  
  return (
    <Router>
    <>

    <h1 style={{color:'#FFF1CE',margin: '30px'} }> Aeternum Labs</h1>
  
    <Route path = '/' exact render ={(props) => (

      <>
      <div className="container">

      <Header />

      <ApiCall/>
      </div>

      <div id="under">
      {tasks.length > 0 ? 
          <Tasks tasks = {tasks} 
          onDelete = {deleteTask}/> 
        : 'No Quest selected'}
        </div>

        </>

        )} />

    <Route path = '/add' exact render ={(props) => (
      <>
      <div className = 'container'>
      
      <AddTask 
        resource = {resources}
        amount = {amounts}
        onToggleR={toggleSelectedR}
        onToggleA={toggleSelectedA}
        />
    

        </div>
        
        <div id="under">
        {tasks.length > 0 ? 
        <Tasks tasks = {tasks} 
        onDelete = {deleteTask}/> 
        : 'No Quest selected'}
        </div>
        
        
        </>
        )}/>

    <Route path = '/about' component = {About}/>

      <Footer/>

    </>
    </Router>




  );
  
}


export default App;


