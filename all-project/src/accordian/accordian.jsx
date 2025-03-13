import { useState } from "react"
import data from "./data"
import './accordian.css'
function accordian() {
    const [singleanswer,setseingleanswer]=useState(null)
    function handelsingleclick(getid){
setseingleanswer(getid === singleanswer ? null:getid)
    }
    return (
        <div className="accordian">

            <div className="container">
                {data && data.length > 0 ? data.map((dataitem) => (
                    <div className="item">
                        <div onClick={()=>handelsingleclick(dataitem.id)} className="title">
                            <h2>{dataitem.question}</h2>
                            <span>+</span>
                        </div>
{
    singleanswer === dataitem.id ? <div className="vlaue">
        {dataitem.answer}
    </div>:null
}
                    </div>
                ))

                    : "no data found"}

            </div>
        </div>
    )
}
export default accordian