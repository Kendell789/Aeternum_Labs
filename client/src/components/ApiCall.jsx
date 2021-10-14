import React,{useState,useEffect} from 'react'
import axios from 'axios'



const ApiCall = () => {
    const[members,setMembers] = useState(null)
    
    useEffect(()=>{
        axios.get("http://localhost:5000/api/members/")
            .then(res => setMembers(res.data))
            .catch(err => console.log(err))

    })
    return (
        <div>
            {
                members? members.map((member) => <p>{member.text}</p>): "no members"
            }
        </div>
    )
}

export default ApiCall
