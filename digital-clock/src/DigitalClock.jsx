import React,{useState,useEffect} from "react"
function DigitalClock(){
    const [time,setime]=useState(new Date())
    useEffect(()=>{
        const intervelid=setInterval(() => {
            setime(new Date())
        }, 1000);
        return () => clearInterval(intervelid);
    },[])
    function timedata(){
        let hour=time.getHours()
        const minutes=time.getMinutes()
        const seconds=time.getSeconds()
        const mniner=hour>=12?"PM":"AM"

        hour= hour%12||12

        return `${padzero(hour)}:${padzero(minutes)}:${padzero(seconds)} ${mniner}`
       
    }
    function padzero(number){
        return(number<10?"0":"")+number;
    }
return(
    <div className="container">
        <div className="clock">
            <span>{timedata()}</span>
        </div>
    </div>
);
}
export default DigitalClock