import { useState } from 'react'
import { genTicket, sum } from './helper';

import Ticket from './Ticket';


export default function Lottery({ n, winningSum }) {

    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () => {
        setTicket(genTicket(n))
    }


    return (
        <>
            <h1>Lottery Game</h1>
            < Ticket ticket={ticket} />
            <br /> <br />
            <button onClick={buyTicket}>Buy New Tix</button >

            <h3>{isWinning && " congratulations!"}</h3>
        </>

    )
}