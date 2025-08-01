import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ ticket }) {
    return (

        <div className="Ticket">
            <p className="Label">Ticket</p>
            <div className="Numbers">
                {ticket.map((num, idx) => (
                    <TicketNum num={num} key={idx} />
                ))}
            </div>

        </div>
    )
}