import TicketNum from "./TicketNum.jsx";
import "./Ticket.css"
export default function Ticket({ticket}) {
    return(
        <div className="Ticket">
            {ticket.map ((num, idx)=>(

            <TicketNum num={num} key={idx}/>
            ))}
        </div>
    )
    
}// yaha argument me ticket ko diya hai jo ki hai ticket number size yani n me jitni value aayegi ticket.map utne hi random number generate karega