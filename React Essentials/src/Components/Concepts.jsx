import { CORE_CONCEPTS } from "../data"
import CoreComponent from "./CoreConcepts"
 function Concepts(){
    return(<>
     <section id="core-concepts">

<h2>Core Concepts</h2>
<ul>
  {CORE_CONCEPTS.map((items,index)=>(
    <CoreComponent key ={index}{...items}/>
  ))}
 

</ul>

</section>
    </>)
}

export default Concepts;