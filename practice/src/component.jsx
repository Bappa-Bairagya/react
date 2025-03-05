import React, { useState } from "react";
function component() {
    const [car, setcar] = useState([])
    const [caryear, setyear] = useState(new Date().getFullYear())
    const [carmake, setmake] = useState("");
    const [carmodel, setmodel] = useState("");
    function addcar() {
       const newcar={year:caryear,make:carmake,model:carmodel}
       setcar(c=>[...c,newcar])
       setyear(2000);
       setmake("");
       setmodel("");
      
    }
    function removecar(index) {
        setcar(c=>c.filter((c,i)=>i!==index));

    }
    function changeyear(event) {
        setyear(event.target.value);
    }
    function changemake(event) {
        setmake(event.target.value);
    }
    function changemodel(event) {
        setmodel(event.target.value);
    }
    return (
        <div>
            <p>List of Car</p>
            <ul>
                {car.map((c,index)=>
                <li key={index} onClick={()=>removecar(index)}>{c.year} {c.make} {c.model}</li>
                )}
            </ul>
            <input type="number" name="" value={caryear} id="" onChange={changeyear} /><br />
            <input type="text" name="" id="" onChange={changemake} placeholder="enter car make" /><br />
            <input type="text" name="" id="" placeholder="enter car model" onChange={changemodel} /><br />
            <button onClick={addcar}>add</button>
        </div>
    );
}
export default component