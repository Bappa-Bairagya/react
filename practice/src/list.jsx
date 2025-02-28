function List(props){
    // const fruits=[{id:1,name: "apple",cal:95},
    //     {id:2,name: "potato",cal:45},
    //     {id:3,name: "banana",cal:4},
    //     {id:4,name:"mango",cal:105}];
    //fruits.sort((a,b)=>(a.name.localeCompare(b.name)))//alaphabatical
    //fruits.sort((a,b)=>(b.name.localeCompare(a.name)))//reverse
    //fruits.sort((a,b)=>(a.cal-b.cal))//numerical
    //fruits.sort((a,b)=>(b.cal-a.cal))//reverse
    //const local=fruits.filter((f)=>(f.cal<100))
    const localitem=props.item
    const catagory=props.catagory
    const listitem=localitem.map(fruit=><li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.cal}</b></li>)
    return(
        <>
        <h3>{catagory}</h3>
        <ol>{listitem}</ol>
        </>
       
    );
}
List.defaultProps={
    catagory:"Catagory",
}
export default List