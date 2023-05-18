import { useState, useEffect } from "react";
import { randomInt } from "../util/random";

function Dice({ nSides, reRollDice }) {
  const [value, setValue] = useState(randomInt(1, nSides));

  // Runs on initial render + anytime reRollDice changes
  useEffect(() => {
    setValue(randomInt(1, nSides))
  }, [reRollDice])

  const handleClick = () => {
    setValue(randomInt(1, nSides));
  };

  return (
    <div className="Dice" onClick={handleClick}>
      <div className="Dice-info">sides = {nSides}</div>
      <div className="Dice-value">{value}</div>
    </div>
  );
}

export default Dice;
