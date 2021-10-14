import { useState,useEffect } from 'react'
import { BrowserRouter as Router,Route} from 'react-router-dom' 
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import axios, { Axios } from 'axios'


var selectedResourceId;
var selectedAmountId;
var selectedQuest;

function App() {
  
  //fetch tasks
  const FetchTasks = () =>{
      useEffect(()=>{
      axios.get("http://localhost:5000/api/quests/")
              .then(res => setTasks(res.data))
              .catch(err => console.log(err))
    }, []);

    }

  //fetch Resources
    const FetchMats = () =>{
      useEffect(()=>{
      axios.get("http://localhost:5000/api/mats/")
              .then(res => setResources(res.data))
              .catch(err => console.log(err))
    }, []);
    }

  //fetch Amounts
  const FetchAmt = () =>{
    useEffect(()=>{
    axios.get("http://localhost:5000/api/amount/")
            .then(res => setAmounts(res.data))
            .catch(err => console.log(err))
  }, []);
  }

  FetchTasks()
  FetchMats()
  FetchAmt()

  const [tasks,setTasks] = useState([])
  const [resources,setResources] = useState([])
  const [amounts,setAmounts] = useState([])




  //create Task
  const createTask = () => {

    var selectedAmount = amounts.filter(amount => {
      return amount.id === selectedAmountId
    })
    var selectedResourceType = resources.filter(resource => {
      return resource.id === selectedResourceId
    })

     const testid = Math.floor(Math.random()*10000)+1
     const resourceAmountReq = selectedAmount[0].val
     const resourceTypeReq = selectedResourceType[0].resourceType
     const id = testid
     const text = selectedQuest.text
    
    const newTask = {id,text,resourceAmountReq,resourceTypeReq}

    console.log(newTask)

    setTasks([...tasks, newTask])
    sendPutRequest()

  
  }
  //new function to just Attempt to just get somthing to work
  async function sendPutRequest(){
            //tried put post nothing works
    const response = await axios.post(
      "http://localhost:5000/api/quests/",
      {

      id: "42",
      resourceAmountReq : 'LumberJacks Neededsda',
      resourceTypeReq : '150ds',
      text : 'Green Wooddsa'

      }
    );

    console.log(response.data);

  }




  //Delete Task
  const deleteTask = (id) => {
    console.log('delete',id)
    setTasks(tasks.filter((task) => task.id !== id))
    axios.delete(`http://localhost:5000/api/quests/${id}`)
        .then(res => console.log(res.data));   
  }


  //Toggle Selected Resource        
  const toggleSelectedR = (id) => {
    selectedResourceId = id
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
    selectedAmountId = id
    amounts.map((amount, i) => {
      if(id === i){
        amount.selected = true;
      }else{
        amount.selected = false;
      }
      setAmounts([...amounts.slice(0, i), amount])
    })
  }
  
  //const Quest name
  const qName = (questName)=>{
    selectedQuest = questName
  }
  
  return (
    <Router>
    <>

    <h1 style={{color:'#FFF1CE',margin: '30px'} }> Aeternum Labs</h1>
  
    <Route path = '/' exact render ={(props) => (

      <>
      <div className="container">

      <Header onPush = {qName}
                />
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
        onAdd = {createTask}
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


