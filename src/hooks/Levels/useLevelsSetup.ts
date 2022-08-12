import { useContext } from "react";
import { GeneralContext } from "../../context/general/GeneralContext";
import { randomSorting } from "../../helpers/randomSorting";

const useLevelsSetup = () => {
  const [{ level }] = useContext(GeneralContext);
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

  return { numberOfBoxes, numberOfColumnsAndRows, boxes };
};

export { useLevelsSetup };
