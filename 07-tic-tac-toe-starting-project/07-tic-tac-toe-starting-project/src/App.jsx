import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import { useState } from 'react';
import Log from './components/Log.jsx';
import { WINNING_COMBINATIONS } from '../WINNING_COMBINATIONS.js';
import GameOver from './GameOver.jsx';
const INITAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const PLAYERS = {
  X: "Player 1",
  O: "Player 2"
}

function derivePlayer(gameTurns){
  let currentPlayer = 'X';
    if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
      currentPlayer = "O";
    }
  return currentPlayer;
}

function derivedGameBoard(gameTurns){
  let gameBoard = [...INITAL_GAME_BOARD.map(array=>[...array])];
  for(const turn of gameTurns){
    const {square, player} = turn;
    const {row, col} = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}
function derivedWinner(gameBoard, players) {
  let winner = null;

  // Check for a winning combination
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
      break;
    }
  }

  // Check for a draw if there's no winner
  const isBoardFull = gameBoard.every(row => row.every(square => square !== null));
  if (!winner && isBoardFull) {
    winner = "Draw";
  }

  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = derivePlayer(gameTurns);
  let gameBoard = derivedGameBoard(gameTurns);
  let winner = derivedWinner(gameBoard, players);
  
  
  
  function handleSelectSquare(rowIndex, colIndex)
  {
    setGameTurns(prevTurns=> {
      const currentPlayer = derivePlayer(prevTurns);
      
      const updatedTurns = [
        {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
        ...prevTurns,
      ]
      return updatedTurns
    });
  }
  function handleRestart(){
    setGameTurns([]);
  }
  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers=>{
      return {
        ...prevPlayers, 
        [symbol]: newName
      }
    })
  }
  return (
    <main>
      <div id = "game-container">
        <ol id = "players" className="highlight-player">
          <Player initialName = {players.X} symbol="X" isActive={activePlayer === 'X'} onNameChange={handlePlayerNameChange}/>
          <Player initialName = {players.O} symbol="O" isActive={activePlayer === 'O'} onNameChange={handlePlayerNameChange}/>

        </ol>
        {winner ?  <GameOver winner={winner} onRestart={handleRestart}></GameOver>: 
          <GameBoard
          onSelectSquare={handleSelectSquare} 
          board={gameBoard}/>
        }
        
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
