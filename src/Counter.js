import { useState } from "react";
import './Count.css';
function Counter (){
    const [x,setvalue] = useState(0)
 return(
 <div className="counter">
    {x}
    <br />
    <div className="count-button">
    <button onClick={()=>setvalue(x +1)}>Increment</button>
    <button onClick={()=>setvalue(x -1)}>Decrement</button>
    </div>
   
 </div>
 )
  
}


export default Counter;