import { useContext } from "react";
import { GeneralContext } from "../../context/general/GeneralContext";
import { randomArray } from "../../helpers/randomArray";
import { randomSorting } from "../../helpers/randomSorting";

const useLevelsSetup = () => {
  const [{ level }] = useContext(GeneralContext);
  const numberOfBoxes = (level + 1) * 2;
  const numberOfColumnsAndRows = Math.ceil(Math.sqrt(numberOfBoxes));

  const midleOfBoxes: number[] = randomArray({
    min: 1,
    max: 30,
    length: numberOfBoxes / 2,
  });
  const totalOfBoxex = [...midleOfBoxes, ...midleOfBoxes];

  const boxes = randomSorting(totalOfBoxex);

  return { numberOfBoxes, numberOfColumnsAndRows, boxes };
};

export { useLevelsSetup };
