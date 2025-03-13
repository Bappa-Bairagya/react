import { useState } from "react"
import data from "./data"
import './accordian.css'
function accordian() {
    const [singleanswer, setseingleanswer] = useState(null)
    const [selectmulti, setselectmulti] = useState(false)
    const [multiple, setmultiple] = useState([])
    function handelsingleclick(getid) {
        setseingleanswer(getid === singleanswer ? null : getid)
    }
    function multipleclick(getnewid) {
        const cpymulti = [...multiple]
        const index = cpymulti.indexOf(getnewid)

        if (index === -1) {
            cpymulti.push(getnewid)
        }
        else {
            cpymulti.splice(index, 1)
        }
        setmultiple(cpymulti)

    }
    console.log(singleanswer, multiple);

    return (
        <div className="accordian">
            <button onClick={() => setselectmulti(!selectmulti)}>Enable multiple selection</button>
            <div className="container">
                {data && data.length > 0 ? data.map((dataitem) => (
                    <div className="item">
                        <div onClick={selectmulti ? () => multipleclick(dataitem.id) : () => handelsingleclick(dataitem.id)} className="title">
                            <h2>{dataitem.question}</h2>
                            <span>+</span>
                        </div>
                        {
                            selectmulti ? multiple.indexOf(dataitem.id) !==-1 && <div className="vlaue">
                                {dataitem.answer}
                            </div> :
                                singleanswer === dataitem.id && <div className="vlaue">
                                    {dataitem.answer}
                                </div>
                        }
                    </div>
                ))

                    : "no data found"}

            </div>
        </div>
    )
}
export default accordian