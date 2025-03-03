
import React,{useState} from "react";
function Colorpiker(){
    const [color,setcolor]=useState("#ffffff");
    function changecolor(event){
setcolor(event.target.value)
    }
    return(
        <div className="color-container">
            <h2>Color piker</h2>
            <div className="color-display" style={{background:color}}>
                <p>selected color: {color}</p>
            </div>
            <p>Select the color</p>
            <input type="color" value={color} onChange={changecolor} />
        </div>
    );
}
export default Colorpiker