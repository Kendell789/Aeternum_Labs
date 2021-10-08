import AddTask from './AddTask'

const Resources = ({resources,onToggle}) => {
     return(
         <>
             {resources.map((resource) => (
                <AddTask key = {resource.id} resource = {resource} 
                onToggle = {onToggle}/>
             ))}
         </>
     )
 }

 export default Resources
