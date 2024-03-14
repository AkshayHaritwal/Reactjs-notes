import './App.css'
import Lottery from './Lottery.jsx'
import TicketNum from './TicketNum.jsx'
import Ticket from './Ticket.jsx'
import {sum} from "./helper.js";
function App() {
  let winCondition = (ticket)=>{
    return sum(ticket) == 15;
  }// yaha humne winninig conditon ke liye ek function bana diya hai ab hum iss function ko hi as argument pass kar denge 

  return (
    <>
    <Lottery n={3}  winCondition = {winCondition}/>
        </>
  )
}// yaha humne lottery ko return karwa diya hai lottery function me 2 argument ki value deni hai n and winning sume jo humne 3 and 15 de di hai 

export default App
