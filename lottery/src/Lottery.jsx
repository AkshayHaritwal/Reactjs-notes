import { useState } from "react";
import { genTicket , sum } from "./helper"; // yaha humne helper.jsx file se genTicket and sum function ko import karwa liya hai 
import Ticket from "./Ticket";

export default function Lottery({n, winCondition}) { // yaha 2 proms argument aayenge n and winconditon 
    let [tickect , setTicket]= useState(genTicket(n));// yaha humne intial value me genTicket function ko de diya hai and isme n value de di hai isse n number of  random number generate honge
    let isWinning = winCondition(tickect);//yaha winning me winCondition function ko as argument de diya hai isme ticket ki value store hogi 

    let buyTicket = () =>{
        setTicket(genTicket(n)); // iski help se reRendring hogi and genTicket function me phir se 3 random number generate honge 
    }

    return(// yaha humne return karwa diya hai Ticket.jsx ko isme ek argument ki value deni thi jisme humne initial value (ticket) ko pass kar diya hai 
        <div>
            <h1>Lottery game</h1>
                <Ticket ticket={tickect}/>

            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "congratulation you won "}</h3>
        </div>//yaha agar iswinning function true return karta hai to ye string print ho jaayegi 
    )// button pe click karte hii buyTicket function triger ho jaayega
}

// hum next ticketNum component ke liye new file create karenge TicketNum.jsx naam se 

// next hum Ticket ke liye Ticket.jsx naam se file create karenge 