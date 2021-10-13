import { useState } from 'react'
import { BrowserRouter as Router,Route} from 'react-router-dom' 
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'




function App() {

  const [showAddTask,setShowAddTask] = useState(false)

  const [tasks,setTasks] = useState([

      {id:1, text:'Weavers Needed', resourceReq:'40 Silk'},
      {id:2, text:'LumberJacks Needed', resourceReq:'200 Green Wood'}
    ])

  const [resources,setResources] = useState([
    
    {id:3, resourceType:'Green Wood', selected:false},
    {id:4,  resourceType:'Aged Wood', selected:false},
    {id:5,  resourceType:'Lumber', selected:false},
    {id:6,  resourceType:'Timber', selected:false}
  ])

  const [amounts,setAmounts] = useState([
    {id:7, val:150, selected:false },
    {id:8,  val:200, selected:false },
    {id:9,  val:250, selected:false },
    {id:10,  val:300, selected:false },
  ])


  //Delete Task
  const deleteTask = (id) => {
    console.log('delete',id)
    setTasks(tasks.filter((task) => task.id !== id))
            }
            
  //Toggle Selected Resource
  const toggleSelectedR = (id) => {
   setResources(resources.map((resource) => resource.id === id ? { ...resource,selected: !resource.selected} : resource))
   console.log(id)
  }

  //Toggle Selected Amount
  const toggleSelectedA = (id) => {
    setAmounts(amounts.map((amount) => amount.id === id ? { ...amount,selected: !amount.selected} : amount))
    console.log(id)
   }
  
  return (
    <Router>
    <>
    <h1 style={{color:'#FFF1CE',margin: '30px'} }> Aeternum Labs</h1>


    <Route path = '/' exact render ={(props) => (
      <>
      <div className="container">
     
     <Header />

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
      <div className = 'container'>
      
      <AddTask 
         resource = {resources}
          amount = {amounts}
          onToggleR={toggleSelectedR}
          onToggleA={toggleSelectedA}/>
          <div id="under">
          {tasks.length > 0 ? 
              <Tasks tasks = {tasks} 
              onDelete = {deleteTask}/> 
            : 'No Quest selected'}
            </div>
      
          </div>
                  )}/>

    <Route path = '/about' component = {About}/>
    <Footer/>

  


    </>
    </Router>




  );
  
}


export default App;


