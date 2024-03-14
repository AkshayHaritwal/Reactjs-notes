import { useState } from "react";

function LudoBoard() {
    let [moves , setMoves] = useState({blue:0 , red:0 , yellow:0 ,green:0});//yaha humne object ki form me sabhi ke liye initial value 0 define kar di hai 

    let updateBlue = ()=>{
        
        setMoves((prevMoves)=>{
            return {...prevMoves ,blue: prevMoves.blue +1}; //so agar hume object key ki value ko update karwana hai to uske liye sabse pahle usko ... ki help se spread karna hoga and then hum usko return kar denge 
        });
    }
    
    let updateRed =() =>{
        setMoves((prevMoves)=>{
            return {...prevMoves ,red: prevMoves.red +1}; //so agar hume object key ki value ko update karwana hai to uske liye sabse pahle usko ... ki help se spread karna hoga and then hum usko return kar denge 
        });
        
    }
    
    let updateYellow = ()=>{
        
        setMoves((prevMoves)=>{
            return {...prevMoves ,yellow: prevMoves.yellow +1}; 
        });

    }
    
    let updateGreen = ()=>{
        
        setMoves((prevMoves)=>{
            return {...prevMoves ,green: prevMoves.green +1}; 
        });
        
    }
    return(
        <div>
            <h2>Game Begin</h2>
            <div className="board">
                <p>Blue moves :{moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>Blue</button>
                <p>Red moves :{moves.red}</p>
                <button style={{backgroundColor:"red"}}onClick={updateRed}>Red</button>
                <p>Yellow moves :{moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}}onClick={updateYellow}>Yellow</button>
                <p>Green moves :{moves.green}</p>
                <button style={{backgroundColor:"green"}}onClick={updateGreen}>Green</button>

            </div>
        </div>
    )
}

export default LudoBoard;