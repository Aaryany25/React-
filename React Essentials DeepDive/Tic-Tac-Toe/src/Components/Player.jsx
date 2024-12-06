import React from 'react'
import { useState } from 'react'
function Player({ name, Symbol, isActive }) {
  const [Name, setName] = useState(name)
  let [isEditing, SetisEditing] = useState(false)
  function HandleState() {

    SetisEditing((isEditing) = !isEditing)
  }
  function HandleChange(event) {
    setName(event.target.value)
  }
  let PlayerName = <span className="player-name">{Name}</span>
  if (isEditing) {
    PlayerName = <input type="text" required defaultValue={Name} onChange={HandleChange} />
  }
  return (

    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {PlayerName}
        <span className="player-symbol">{Symbol}</span>
      </span>
      <button onClick={HandleState}>{isEditing ? "Save" : "Edit"}</button>
    </li>

  )
}

export default Player
