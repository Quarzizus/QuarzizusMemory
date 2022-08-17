import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../../context/general/GeneralContext";
import { useTimer } from "../../hooks/Timer/useTimer";
import "./styles.scss";

const Counter = () => {
  const [{ startGame }] = useContext(GeneralContext);
  const { count } = useTimer(startGame);
  return (
    <section className="Counter">
      <p>{count} s</p>
    </section>
  );
};

export { Counter };
