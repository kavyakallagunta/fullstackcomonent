import React,{useState} from "react";
const Hooksexample1=()=>{
    const[count,setcount]=useState(0)
    const increment=()=>{
        setcount(count+1)

    }
    return(
        <div>
            <h3>count-{count}</h3>
            <button onClick={increment}>Click</button>
        </div>
    );
}; 
export default Hooksexample1;