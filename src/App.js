import "./App.css";
import Dice from "./components/Dice.js";
import {useState, useEffect} from "react";

function App() {
  const [allDice, setAllDice] = useState([6, 12, 20])
  const [reRollDice, setReRollDice] = useState(false)
  const [newDiceNSides, setNewDiceNSides] = useState(4)
  
  // Made dice items using map so new items can be easily created
  const diceItems = allDice.map((dice) => (
    <Dice nSides={dice} reRollDice={reRollDice}/>
  ))

  // Toggles the reRollDice state and causes the useEffect in the child to re-render
  function rollAllDice() {
    setReRollDice(prev => !prev)
  }
  
  // All dice is an array of all the dice sides
  function addDice() {
    setAllDice(prev => [...prev, newDiceNSides])
  }

  return (
    <div className="App">
      <form>Add a new dice!</form>
      <div>
        <label htmlFor="nSides">Choose Number of Sides:</label>
        <input id="nSides" type="number" onChange={(e) => {setNewDiceNSides(e.target.value)}}/>
        <button onClick={addDice}>Add Dice</button>
      </div>

      <div>
        <button onClick={rollAllDice}>Roll all dice</button>
      </div>

      <div>
        {diceItems}
      </div>
    </div>
  );
}

export default App;
