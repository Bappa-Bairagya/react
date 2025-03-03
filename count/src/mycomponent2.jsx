import React,{useState} from "react";
function mycomponent2(){
    const [name,setname]=useState("guest")
    const [num,setnum]=useState(1)
    function change(event){
setname(event.target.value)
    }
    function setnumber(event){
        setnum(event.target.value)
    }
return(
    <div>
    <input type="text" value={name} onChange={change} />
    <p>Name: {name}</p>
    <input type="number" value={num} onChange={setnumber} />
    <p>Quantity: {num}</p>
    </div>
);
}
export default mycomponent2