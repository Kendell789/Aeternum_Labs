import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {
  const [tasks,setTasks] = useState([

      {id:1, text:'Weavers Needed', resource:'40 Silk'},
      {id:2, text:'LumberJacks Needed', resource:'200 Green Wood'}
    ])


  //Delete Task
  const deleteTask = (id) => {
    console.log('delete',id)
    setTasks(tasks.filter((task) => task.id !== id))
            }

  return (
    <>
    <h1 style={{color:'#FFF1CE',margin: '30px' } }> Aeternum Labs</h1>
    <div className="container">
      <Header/>
    </div>
    <div id="under">
    {tasks.length > 0 ? 
        <Tasks tasks = {tasks} 
        onDelete = {deleteTask}/> 
      : 'No Quest selected'}
    </div> 
    </>
  );
}

export default App;
