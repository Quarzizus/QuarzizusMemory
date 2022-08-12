import { useContext } from "react";
import { GeneralContext } from "../../context/general/GeneralContext";
import "./styles.scss";

const StartButton = () => {
  const [{ startGame }, dispatch] = useContext(GeneralContext);
  const handleClick = () => {
    dispatch({
      type: "SET_START_GAME",
      payload: !startGame,
    });
  };
  return (
    <button className="StartButton" onClick={handleClick}>
      {!startGame ? "START" : "RESTART"}
    </button>
  );
};

export { StartButton };
