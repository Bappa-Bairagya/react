import { useState } from "react";

function counter(){
    const [count,setcount]=useState(0)
    const increment=()=>{
        setcount(count+1)
    }
    const decrement=()=>{
        setcount(count-1)
    }
    const reset=()=>{
        setcount(0)
    }
return(
    <div className="container">
        <p className="para">{count}</p>
        <button className="btn" onClick={increment}>Increment</button>
        <button className="btn" onClick={reset}>Reset</button>
        <button className="btn" onClick={decrement}>Decrement</button>
    </div>
);
}
export default counter