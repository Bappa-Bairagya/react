function Button(){
    const handel=()=> console.log("isss");
    const handel2=(e)=> console.log(e.target.textContent="ouch!!");
    
return(
    <button onClick={(e)=> handel2(e)}>click me</button>
);
}
export default Button