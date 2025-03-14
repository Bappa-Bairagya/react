import Accordian from "./accordian/accordian.jsx"
import RandomColor from "./random-color/randomColor.jsx"
import Review from "./star-review/review.jsx"
function App() {
  

  return (
    <>
    
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      <Review getstar={10}/>
    </>
  )
}

export default App
