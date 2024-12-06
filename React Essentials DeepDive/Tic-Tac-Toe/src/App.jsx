import Player from "./Components/Player"
import Game_Board from "./Components/Game_Board"
import { useState } from "react"
function App() {
  const [ActivePlayer,SetActivePlayer]=useState()
  function HandlePlayer(){
    SetActivePlayer((CurrentPlayer)=>CurrentPlayer === "X"?"O":"X")
  }
  return (
  <main>
    <div id="game-container" className="highlight-player">
      <ol id="players">
       <Player name="Aryan" Symbol = "X" isActive={ActivePlayer==='X'}/>
       <Player name="Avni" Symbol = "O" isActive={ActivePlayer==='O'}/>
      </ol>
<Game_Board onSelect={HandlePlayer} ActivePlayerSymbol={ActivePlayer}/>
    </div>
  </main>
  )
}

export default App
