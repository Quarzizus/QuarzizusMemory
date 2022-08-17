import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../../context/general/GeneralContext";
import "./styles.scss";

const Counter = () => {
  const [{ startGame }] = useContext(GeneralContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval: number;
    const clearIntervalHandle = () => clearInterval(interval);
    if (startGame) {
      interval = setInterval(() => {
        setCount(count + 1);
      }, 1000);
    }
    if (!startGame) {
      clearIntervalHandle();
      setCount(0);
    }

    return () => clearIntervalHandle();
  }, [count, startGame]);

  return (
    <section className="Counter">
      <p>{count} s</p>
    </section>
  );
};

export { Counter };
