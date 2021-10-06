import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {
  const [tasks,setTasks] = useState([{id:1,text:'Add Quests',resource:'Add Resources'}])
  return (
    <div className="container">
      <h1 style={{color:'#FFF1CE'}}> Aeternum Labs</h1>
      <Header/>
      <Tasks tasks = {tasks}/>
    </div>
  );
}

export default App;
