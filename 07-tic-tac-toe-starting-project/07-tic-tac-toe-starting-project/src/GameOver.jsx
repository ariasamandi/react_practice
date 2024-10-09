export default function GameOver({winner, onRestart}){
    return (
    <div id="game-over">
        <h2>Game OVer!</h2>
        <p>
        {winner === "Draw" ? 
        <p>Draw!</p>
        :
        <p>You Won! {winner}!</p>
        }
        </p>
        
        
        <p>
            <button onClick={onRestart}>Rematch</button>
        </p>

    </div>
    );
}