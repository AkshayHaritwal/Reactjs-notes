import { useState , useEffect } from "react";

export default function Counter() {
    let [count , setCount]= useState(0);
    let [county , setCounty]= useState(0);

    let incCount = () =>{
        setCount (currCount => currCount +1);

    }

    let incCounty = () =>{
        setCounty (currCount => currCount +1);

    }

    useEffect(function printSomething() { // jitni baar bhi ye function render ya reRender karega utni baar ye useEffect execute ho jaayega
        console.log("use effect triggered");
        
    },[county]) // iss tarah se hum useEffect me dependency pass kar sakte hai ye county se kewal county wale function me koi rendering/reRender hoga tabhi ye execute hoga else nahi agar hum isko empty chor de to kewal 1st rendering pe trigger hoga 
    ; 
    


    return (
        <div>
            <h3>
                count = {count}
            </h3>
            <button onClick={incCount}>Count</button>

            
            <h3>
                count = {county}
            </h3>
            <button onClick={incCounty}>Count</button>
        </div>
    )
    
}