import styled from "styled-components";

const keysArray = [
  { value: "AC", styling: "clear wide" },
  { value: "/", styling: "operator" },
  { value: "7", styling: "num" },
  { value: "8", styling: "num" },
  { value: "9", styling: "num" },
  { value: "*", styling: "operator" },
  { value: "4", styling: "num" },
  { value: "5", styling: "num" },
  { value: "6", styling: "num" },
  { value: "+", styling: "operator" },
  { value: "1", styling: "num" },
  { value: "2", styling: "num" },
  { value: "3", styling: "num" },
  { value: "-", styling: "operator" },
  { value: "0", styling: "zero wide" },
  { value: ".", styling: "num" },
  { value: "=", styling: "operator" },
];

export const Keys = ({ handleKey }) => {
  return (
    <KeysWrapper>
      {keysArray.map((item, index) => (
        <button
          key={index}
          onClick={() => handleKey(item.value)}
          className={item.styling}
        >
          {item.value}
        </button>
      ))}
    </KeysWrapper>
  );
};

const KeysWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "clear clear clear ."
    ". . . ."
    ". . . ."
    ". . . ."
    "zero zero . .";
  gap: 5px;
  width: 240px;

  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    /* 
    align-self: center;
    justify-self: center; */
  }

  .operator {
    background-color: #ff952a;
    color: white;
  }

  .wide {
    width: auto;
    border-radius: 25px;
  }

  .clear {
    grid-area: clear;
  }

  .zero {
    grid-area: zero;
  }
`;
