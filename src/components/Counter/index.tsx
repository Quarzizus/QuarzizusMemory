import { useContext } from "react";
import { GeneralContext } from "../../context/general/GeneralContext";
import { calcTime } from "../../helpers/calcTime";
import { useTimer } from "../../hooks/Timer/useTimer";
import "./styles.scss";

const Counter = () => {
  const [{ startGame }] = useContext(GeneralContext);
  const { count } = useTimer(startGame);
  const [minutes, seconds] = calcTime(count);
  return (
    <section className="Counter">
      <p>
        {minutes}:{seconds}
      </p>
    </section>
  );
};

export { Counter };
