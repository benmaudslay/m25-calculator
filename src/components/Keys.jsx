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

export const Keys = () => {
  return (
    <div className="keys">
      {keysArray.map((item, index) => (
        <button key={index}>{item.value}</button>
      ))}
    </div>
  );
};
