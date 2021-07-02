import "./App.css";
import { Display } from "./components/Display";
import { Keys } from "./components/Keys";

// number buttons
// operator buttons
// eval the maths

const App = () => {
  return (
    <div>
      <Display value={0} />
      <Keys />
    </div>
  );
};

export default App;
