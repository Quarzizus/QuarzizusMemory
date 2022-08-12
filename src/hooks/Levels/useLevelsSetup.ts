import { useState } from "react";
import { randomSorting } from "../../helpers/randomSorting";

const useLevelsSetup = () => {
  const [level, setLevel] = useState(1);
  const numberOfBoxes = (level + 1) * 2;
  const numberOfColumnsAndRows = Math.ceil(Math.sqrt(numberOfBoxes));

  const midleOfBoxes: number[] = Array.from(
    { length: numberOfBoxes / 2 },
    (_element, i) => {
      return i + 1;
    }
  );
  const totalOfBoxex = [...midleOfBoxes, ...midleOfBoxes];

  const boxes = randomSorting(totalOfBoxex);

  const handleLevelUp = () => {
    setLevel(level + 1);
  };

  return { handleLevelUp, numberOfBoxes, numberOfColumnsAndRows, boxes };
};

export { useLevelsSetup };
