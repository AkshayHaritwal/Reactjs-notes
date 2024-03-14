import { useState } from "react";

function Array() {
    let [value , setValue]= useState(["Akshay"]); // yaha humne array me initial value Akshay de di hai 

    let updateValue= ()=>{
        setValue((prevalue)=>{
            return [...prevalue ,"Rohit" ]; // so jitni baar hum button pe click karenge utni baar rerendering hogi and ye string add hoti jaayegi array me har baar 
        
        });
    }
    

    return(
        <div>
        <p>{value}</p>
        <button onClick={updateValue}>click</button>
        </div>

    )
}

export default Array;