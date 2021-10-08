import ResourceBtn from './ResourceBtn'

const Resources = ({resources,onToggle}) => {
     return(
         <>
             {resources.map((resource) => (
                <ResourceBtn key = {resource.id} resource = {resource} 
                onToggle = {onToggle}/>
             ))}
         </>
     )
 }

 export default Resources
