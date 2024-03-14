// yaha humne ke function banaya and isko hume button me as onclick function pass kar diya hai ab jese hii button pe click karenge hello print hoga 
function printHello() {
    console.log("hello");   
}

function Like() {
    console.log("you like this post")
    
}

function Button() {
    return(
        <div>
            <button  onClick={printHello}>click me</button>
            <button onClick={Like}>Likebutton</button>
        </div>
    )
    
}

export default Button;