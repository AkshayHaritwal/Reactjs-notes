function Title() {
    // return  <h3>This is title of this page</h3> 
    // agar hume yaha multiple chize return karwani hai to uske liye uss sabko div me wrap karke return karwa denge like this  
    let name = "Akshay"; // iss variable ki value hum niche {} me access kar sakte hai 
    return (
        <div>
            <h3>This is title for this page </h3>
            <h4>India is great country </h4>
            <p>2*2 = {2*2}</p> 
            <p>Name : {name}</p> 
            <button>Agree</button>
            
        </div>
        // iss tarah se agar hum {} me code likhenge to wo javascript ka code hoga 
    )


}

// function Name() {
//     return <h2>Akshay</h2>
// }

export default Title ;  // for exporting single function 
//export {Title , Name}; // for exporting multiple function 