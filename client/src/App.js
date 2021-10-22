import { useState,useEffect } from 'react'
import { BrowserRouter as Router,Route} from 'react-router-dom' 
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import Calc from './components/Calc'
import Result from './components/Result'
import axios from 'axios'


var selectedResourceId;
var selectedAmountId;
var selectedQuest;
var Rready = false;
var Aready = false;

function App() {

  
  //fetch tasks
  const FetchTasks = () =>{
      useEffect(()=>{
      axios.get('http://localhost:5000/quests')
              .then(res => setTasks(res.data))
              .catch(err => console.log(err))
    }, []);

    }

  //fetch Resources
    const FetchMats = () =>{
      useEffect(()=>{
      axios.get("http://localhost:5000/mats")
              .then(res => setResources(res.data))
              .catch(err => console.log(err))
    }, []);
    }

  //fetch Amounts
  const FetchAmt = () =>{
    useEffect(()=>{
    axios.get("http://localhost:5000/amounts")
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
      return amount._id === selectedAmountId
    })

    var selectedResourceType = resources.filter(resource => {
      return resource._id === selectedResourceId
    })

    const newQuest = {
     id : Math.floor(Math.random()*10000)+1,
     text : selectedQuest.text,
     resourceAmountReq : selectedAmount[0].val,
     resourceTypeReq : selectedResourceType[0].resourceType
    }
    console.log(newQuest)
    axios.post('http://localhost:5000/quests',newQuest)
    window.location.reload(true);

  }





  //Delete Task
  const deleteTask = (id) => {
    console.log('delete',id)
    setTasks(tasks.filter((task) => task.id !== id))
    const object = (tasks.find(x => x.id === id))
    axios.delete(`http://localhost:5000/quests/${object._id}`)
        .then(res => console.log(res.data));   
  }


  //Toggle Selected Resource        
  const toggleSelectedR = (id,_id) => {
    selectedResourceId = _id
    console.log(selectedResourceId)
    console.log(resources)
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
  const toggleSelectedA = (id,_id) => {
    selectedAmountId = _id
    console.log(id)
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

  function TODO(){
    alert("Will add this feature if people actually want it Message me on discord at Blissfulgamer#8030")
}



  const Rpressed = () =>{
      Rready = true  
  }
  
  const Apressed = () =>{
      Aready = true
  }
  
  return (
    <Router>
    <>
    <Link to="/" style={{ textDecoration: 'none' }}>
    <h1 style={{color:'#FFF1CE',margin: '0px',paddingLeft: '10px', paddingTop: '10px'} }> Aeternum Labs </h1> 
    </Link>

  
    <Route path = '/' exact render ={(props) => (

      <>
      <div className="container">
      <Header onPush = {qName} TODO = {TODO}
                />

      <Calc/>

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
        quest={selectedQuest}
        onAdd = {createTask}
        onToggleR={toggleSelectedR}
        onToggleA={toggleSelectedA}
        Rpressed={Rpressed}
        Apressed={Apressed}
        Rready={Rready}
        Aready={Aready}
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

    < Route path = '/calc' exact render ={(props) => (
      <>
        <Result quests = {tasks}/>
      </>
        )}/>

    <Route path = '/about' component = {About}/>

      <Footer/>

    </>
    </Router>




  );
  
}


export default App;


