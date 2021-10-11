import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Resources from './components/Resources'



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

  const amounts =
   [{id:5, amount:25, selected:false },
    {id:6,  amount:300, selected:false }
  ]


  //Delete Task
  const deleteTask = (id) => {
    console.log('delete',id)
    setTasks(tasks.filter((task) => task.id !== id))
            }
            
  //Toggle Selected
  const toggleSelected = (id) => {
   setResources(resources.map((resource) => resource.id === id ? { ...resource,selected: !resource.selected} : resource))
   console.log(id)
  }
  
  return (
    <>
    <h1 style={{color:'#FFF1CE',margin: '30px'} }> Aeternum Labs</h1>
    <div className="container">
     
     {/* how to do routing 
     react-router-dom
     browser
     */}

    {!showAddTask && <Header onAdd={() => setShowAddTask (!showAddTask)}/>}

    {showAddTask && <AddTask resource = {resources}
                      onToggle={toggleSelected}/>}
                      


    </div>
    <div id="under">
    {tasks.length > 0 ? 
        <Tasks tasks = {tasks} 
        onDelete = {deleteTask}/> 
      : 'No Quest selected'}
    </div> 


    
    {/* <h1 style={{color:'#FFF1CE',margin: '30px' } }> Aeternum Labs</h1>
    <div className="container">
     


    {!showAddTask && <Header onAdd={() => setShowAddTask (!showAddTask)}/>}
    
     only created a blank button 
    {showAddTask && <AddTask resource = {resources}
                      onToggle={toggleSelected}/>} 
      add the format here that should be in addTask 

     { showAddTask &&<form className = 'add-form'>

     <div className='form-control'>

         <label> What type of wood do you need </label>
       
       
      <button className = 'type-select' >
        {showAddTask &&<Resources resources = {resources}onToggle={toggleSelected} />}
      </button>
      </div>
     <input type='submit' value='Save Material' className = 'btn btn-block'/> 
      </form>    }
                       add the format here that should be in addTask 
                  


    </div>
    <div id="under">
    {tasks.length > 0 ? 
        <Tasks tasks = {tasks} 
        onDelete = {deleteTask}/> 
      : 'No Quest selected'}
    </div>
 */}









    </>




  );
  
}


export default App;


