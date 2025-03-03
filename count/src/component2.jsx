import React, { useState } from "react"
function component2() {
    const [food, setfood] = useState(["apple", "banana", "mango"]);
    function addfood() {
        const newfood = document.getElementById("inputfood").value
        document.getElementById("inputfood").value = ""
        setfood([...food, newfood])
    }
    function removefood(index) {
        setfood(food.filter((c ,  i) =>
            i !== index
        ))
    }
    return (
        <div>
            <p>Food List</p>
            <ul>
                {food.map((f, i) =>
                    <li key={i} onClick={() => removefood(i)}>{f}</li>
                )}
            </ul>
            <input type="text" id="inputfood" />
            <button onClick={addfood}>add</button>
        </div>
    );
}
export default component2