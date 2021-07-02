import { useState } from "react";
import { evaluate } from "mathjs";
import styled from "styled-components";

import "./App.css";

import { Display } from "./components/Display";
import { Keys } from "./components/Keys";

const App = () => {
  const [displayNum, setDisplayNum] = useState([0]);

  const handleKey = (value) => {
    if (value === "AC") {
      setDisplayNum([0]);
    } else if (value === "=") {
      setDisplayNum([evaluate(displayNum.join(""))]);
    } else {
      let newArr = [...displayNum, value];
      if (newArr[0] === 0) {
        newArr.shift();
      }
      setDisplayNum(newArr);
    }
  };

  return (
    <StyledContainer>
      <Display value={displayNum} />
      <Keys handleKey={handleKey} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #3a3a3a;
  color: white;
  box-sizing: border-box;
  /* width: 300px; */
  /* height: 500px; */
  border-radius: 10px;

  display: grid;
  grid-template-rows: 60px 1fr;

  h1 {
    margin: 8px;
    margin-right: 20px;
    text-align: end;
  }

  @media (min-width: 350px) {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -0%);
  }
`;

export default App;
