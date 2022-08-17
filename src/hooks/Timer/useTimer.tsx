import { useEffect, useState } from "react";

const useTimer = (dependency: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval: number;
    const clearIntervalHandle = () => clearInterval(interval);
    if (dependency) {
      interval = setInterval(() => {
        setCount(count + 1);
      }, 1000);
    }
    if (!dependency) {
      clearIntervalHandle();
      setCount(0);
    }
    return () => clearIntervalHandle();
  }, [count, dependency]);

  return { count };
};

export { useTimer };
