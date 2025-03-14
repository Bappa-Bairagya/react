import { useState } from 'react';
import { FaStar } from 'react-icons/fa'
import './style.css'
function review({ getstar = 5 }) {
    const [rating, setrating] = useState(0)
    const [hover, sethover] = useState(0)
    function handelclick(i) {
        setrating(i)
        console.log(i);
    }
    function handleEnter(i) {
        sethover(i)
    }
    function handleLeave() {
        sethover(rating)
        console.log(rating);

    }
    return (
        <div>
            {
                [...Array(getstar)].map((_, index) => {
                    index += 1;
                    return (
                        <FaStar
                            key={index}
                            className={index <= (hover || rating) ? "active" : "inactive"}
                            onClick={() => handelclick(index)}
                            onMouseMove={() => handleEnter(index)}
                            onMouseLeave={() => handleLeave()}
                            size={40}
                        />
                    )
                })
            }
        </div>
    )
}
export default review