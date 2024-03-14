import "./TicketNum.css";

export default function TicketNum({num}) {
    return  <span className="TicketNum">{num}</span>;   
}

// yaha humne ticket number ke liye ek function bana diya hai isme num me ek argument(props ) aayega isse hum print karwa denge in a span then isko import karwa lenge in app.jsx