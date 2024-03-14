import { useState } from "react"; //yaha humne useState ko require kar liya hai iski help function reRender hota hai value update ho paayegi 


function Counter() {
    let [count , setCount]= useState(0); // ye useState ko likhne ka format hai isme 2 value jaati hai first initial value and then updated value , initial value humne useState me initialize kar di hai 0 hum chae to 0 ki jagah koi function bhi pass kar saakte hai , ab next Setcount hai jo rerender karwata hai 
    function inCount() {
        // setCount(count +=1); // yaha humne set count me updated value pass kar di hai isse jab function reRender hoga to updated value print hogi , first method
        setCount((currCount)=>{
            return currCount +1;
        });  // iss tarah se hum ek callback bhi pass kar sakte hai setCount me 
        
    }
    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={inCount}>Count </button>
        </div>
    )
    
}
export default Counter;