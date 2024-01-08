// import "./App.css";
import EightBall from "./EightBall";
import answers from "../data/answersData";
import BoxCollection from "./BoxCollection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EightBall answers={answers}> </EightBall>
        <BoxCollection boxCount={16}></BoxCollection>
      </header>
    </div>
  );
}

export default App;
