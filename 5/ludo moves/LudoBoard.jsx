import { useState } from "react"
export default function LudoBoard() {
    let [move, setMove] = useState({ blue: 0, green: 0, yellow: 0, red: 0 })

    // let updateBlue = () => {
    //     move.blue += 1;
    //     console.log(`move.blue= ${move.blue}`);
    //     setMove({ ...move })
    // }

    return (
        <div>
            <p>Game Start!</p>
            <div className="board">
                <p>Blue moves={move.blue} </p>
                <button style={{ backgroundColor: "blue" }} onClick={() => {
                    move.blue += 1;
                    setMove({ ...move });
                }}>+1</button>

                <p>Green moves={move.green} </p>
                <button style={{ backgroundColor: "green" }} onClick={() => {
                    move.green += 1;
                    setMove({ ...move });
                }}>+1</button>

                <p>Yellow moves={move.yellow} </p>
                <button style={{ backgroundColor: "yellow" }} onClick={() => {
                    move.yellow += 1;
                    setMove({ ...move });
                }}>+1</button>

                <p>Red moves={move.red} </p>
                <button style={{ backgroundColor: "red" }} onClick={() => {
                    move.red += 1;
                    setMove({ ...move });
                }}>+1</button>
            </div>
        </div >
    )
}
