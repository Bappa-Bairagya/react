import React,{useState} from "react";
function todolist(){
    const [task,settask]=useState(["ma","jari"])
    const [newtask,setnewtask]=useState("")
    function takeinput(event){

setnewtask(event.target.value)
    }
    function addtask(){
        if (newtask.trim()!=="") {
            settask(t=>[...t,newtask])
        setnewtask("")
        }
        
    }
    function removetask(index){
       const update= task.filter((d,i)=>i!==index)
       settask(update)
    }
    function moveup(index){
        if (index>0) {
            const update= [...task];
            [update[index],update[index-1]]=[update[index-1],update[index]]
            settask(update)
        }
    }
    function movedown(index){
        if (index< task.length-1) {
            const update= [...task];
            [update[index],update[index+1]]=[update[index+1],update[index]]
            settask(update)
        }
    }
return(
    <div className="todo">
        <h1>List of work</h1>
        <div>
        <input type="text" value={newtask} placeholder="enter your task" onChange={takeinput} />
        <button onClick={addtask} className="add">Add</button>
        </div>
        <ul>
            {task.map((t,index)=>
                <li key={index}><span className="text">{t}</span><button onClick={()=>removetask(index)} className="delet">delete</button><button className="move" onClick={()=>moveup(index)}>☝️</button> <button className="move" onClick={()=>movedown(index)}>👇</button></li>
            )}
        </ul>
    </div>
);
}
export default todolist