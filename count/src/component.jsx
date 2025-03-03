import React,{useState} from "react";
function component(){
const [car,setcar]=useState({year:2024,make:"Ford",model:"Mastang"})
function cyear(event){
setcar(c=>({...car,year:event.target.value}))
}
function cmake(event){
    setcar(c=>({...car,make:event.target.value}))
    }
    function cmodel(event){
        setcar(c=>({...car,model:event.target.value}))
        }
return(
    <div>
        <p>My car is : {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={cyear}/>
        <input type="text" value={car.make} onChange={cmake}/>
        <input type="text" value={car.model} onChange={cmodel}/>
    </div>
);
}
export default component