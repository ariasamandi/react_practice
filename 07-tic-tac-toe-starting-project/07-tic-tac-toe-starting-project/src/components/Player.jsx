import {useState} from 'react';
export default function player({initialName, symbol, isActive, onNameChange}){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    function isClicked(){
        setIsEditing((editing)=>!editing);
        if (isEditing){
            onNameChange(symbol, playerName)
        }
        
    }
    function handleChange(event){
        console.log(event)
        setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className = "player-name">{playerName}</span>
    
    
    
    
    if (isEditing) {
        editablePlayerName = <input></input>
    }
    return(
        <li className={isActive ? 'active': undefined}>
            <span className="player">
              {isEditing ?  <input type="text" required value={playerName} onChange={handleChange}></input>:<span className = "player-name">{playerName}</span>}
              <span className = "player-symbol">{symbol}</span>
            </span>
            <button onClick={isClicked}>{isEditing ? "Save": "Edit"}</button>
        </li>
    )
}