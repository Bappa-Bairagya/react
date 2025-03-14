import { useEffect, useState } from "react";

function randomColor() {
    const [color, setcolor] = useState('#000000')
    const [typeofcolor, settypeofcolor] = useState('hex')
    function generatecolor(length) {
        return Math.floor(Math.random() * length)
    }
    function hexcolor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
        let hexcolor = "#"
        for (let i = 0; i < 6; i++) {
            hexcolor += hex[generatecolor(hex.length)]
        }
        setcolor(hexcolor)

    }
    function rgbcolor() {
const r=generatecolor(256)
const g=generatecolor(256)
const b=generatecolor(256)
let rgbcolor=`rgb(${r},${g},${b})`
setcolor(rgbcolor)
    }
   
    return (
        <div style={{ height: "100vh", background: color, textAlign: "center" }}>
            <button onClick={() => settypeofcolor('hex')}>Type Hex</button>
            <button onClick={() => settypeofcolor('rgb')}>Type RGB</button>
            <button onClick={typeofcolor === 'hex' ? hexcolor : rgbcolor}>Genarate Random Color</button>
            <div>
                <h2>{typeofcolor==='rgb'? "RGB Color":"Hex Color"}</h2>
                <h1>{color}</h1>
            </div>
        </div>
    );
}
export default randomColor