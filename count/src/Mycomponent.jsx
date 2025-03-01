import React,{useState} from "react"
function Mycomponent(){
    const [name,setname]=useState("Guest");
    const [age,setage]=useState(0)
    const setn =()=>{
        setname("Bappa");
        
    }
    const seta=()=>{
        setage(age+1)
    }
return(
    <div>
        <p>Name:{name}</p>
        <button onClick={setn}>set name</button>
        <p>Age:{age}</p>
        <button onClick={seta}>increment age</button>
    </div>
);

}
export default Mycomponent