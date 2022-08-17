import { useContext, useState } from "react";
import { GeneralContext } from "../../context/general/GeneralContext";
import "./styles.scss";

const StartButton = () => {
  const [{ startGame }, dispatch] = useContext(GeneralContext);
  const status = !startGame ? { mood: "START" } : { mood: "RESTART" };

  const handleClick = () => {
    dispatch({
      type: "SET_START_GAME",
      payload: !startGame,
    });
    dispatch({
      type: "SET_LEVEL",
      payload: 1,
    });
  };
  return (
    <button className={`StartButton ${status.mood}`} onClick={handleClick}>
      {status.mood}
    </button>
  );
};

export { StartButton };
