import ColorBox from "./ColorBox";
import "./BoxCollection.css";
import { getRandomColor } from "./helpers/getRandomColor";

import { useState } from "react";

const BoxCollection = ({ boxCount }) => {
  const [boxState, setBoxState] = useState(
    Array.from({ length: boxCount }, () => ({
      color: getRandomColor(),
      changeStatus: "",
    }))
  );

  const handleBoxUpdate = () => {
    const randomIndex = Math.floor(Math.random() * boxState.length);

    setBoxState((prevBoxState) => {
      const newBoxState = [...prevBoxState];

      const lastChangeIndex = newBoxState.findIndex(
        (box) => box.changeStatus === "Changed"
      );

      if (lastChangeIndex !== -1) {
        newBoxState[lastChangeIndex].changeStatus = "";
      }

      newBoxState[randomIndex].color = getRandomColor();
      newBoxState[randomIndex].changeStatus = "Changed";

      return newBoxState;
    });
  };

  return (
    <div className="BoxCollection">
      {boxState.map((box, index) => (
        <ColorBox
          key={index}
          color={box.color}
          changeStatus={box.changeStatus}
        />
      ))}

      <button className="BoxCollection-changeButton" onClick={handleBoxUpdate}>
        Change
      </button>
    </div>
  );
};

export default BoxCollection;
