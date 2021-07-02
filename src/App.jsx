import { useState } from "react";
import { evaluate } from "mathjs";

import "./App.css";

import { Display } from "./components/Display";
import { Keys } from "./components/Keys";

// number buttons
// operator buttons
// eval the maths

const App = () => {
  const [displayNum, setDisplayNum] = useState([0]);

  const handleKey = (value) => {
    if (value === "AC") {
      setDisplayNum([0]);
    } else if (value === "=") {
      setDisplayNum([evaluate(displayNum.join(""))]);
    } else {
      setDisplayNum([...displayNum, value]);
    }
  };

  return (
    <div>
      <Display value={displayNum} />
      <Keys handleKey={handleKey} />
    </div>
  );
};

export default App;
