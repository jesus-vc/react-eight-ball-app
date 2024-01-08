import "./EightBall.css";
import { useState } from "react";

const EightBall = ({ answers }) => {
  const initialState = {
    color: "black",
    msg: "Welcome! Think of a Question!",
    counters: 0,
  };

  const [color, setColor] = useState(initialState.color);
  const [msg, setMsg] = useState(initialState.msg);
  const [counters, setCounters] = useState({
    green: initialState.counters,
    goldenrod: initialState.counters,
    red: initialState.counters,
  });

  const setColorAndMsg = (answers) => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomColor = answers[randomIndex].color;
    const randomMsg = answers[randomIndex].msg;

    setColor(randomColor);
    setMsg(randomMsg);

    // create a shallow copy of the state with desired change
    setCounters((prevCounters) => ({
      ...prevCounters,
      [randomColor]: prevCounters[randomColor] + 1,
    }));
  };

  const resetState = () => {
    setColor(initialState.color);
    setMsg(initialState.msg);

    setCounters({
      green: initialState.counters,
      goldenrod: initialState.counters,
      red: initialState.counters,
    });
  };

  return (
    <>
      <div
        className="EightBall-circle"
        style={{ backgroundColor: color }}
        onClick={() => setColorAndMsg(answers)}
      >
        <p className="EightBall-msg">{msg}</p>
      </div>
      <button className="EightBall-button" onClick={resetState}>
        Reset
      </button>

      {Object.entries(counters).map(([color, count]) => (
        <p key={color} className="EightBall-counters">
          {`${color.charAt(0).toUpperCase() + color.slice(1)} Count: ${count}`}
        </p>
      ))}
    </>
  );
};

export default EightBall;
