//import PropTypes from "prop-types";
function Student(props){
    return(
        // <div className="student">
        //     <p>Name : {props.name}</p>
        //     <p>Age : {props.age}</p>
        //     <p>Is he student : {props.isStudent? "Yes":"No"}</p>
        // </div>
        props.islog ? <h2 className="green">your name is {props.name}</h2>: <h2 className="red"> please login</h2>
    );
}


// Student.defaultProps = {
//     name: "Guest",
//     age: 0,
//     isStudent: false,
// };
export default Student