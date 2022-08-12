import { useState } from "react";
import { ListOfBoxexCp } from "./styles";
import { Box } from "../../components/Box";

const ListOfBoxes = () => {
  const [level, setLevel] = useState(1);
  const numberOfBoxes = (level + 1) * 2;
  const numberOfColumnsAndRows = Math.ceil(Math.sqrt(numberOfBoxes));

  return (
    <>
      <ListOfBoxexCp numberOfColumnsAndRows={numberOfColumnsAndRows}>
        {Array.from({ length: numberOfBoxes }, (_n) => (
          <Box />
        ))}
      </ListOfBoxexCp>
      <button onClick={() => setLevel(level + 1)}> level up </button>
    </>
  );
};

export { ListOfBoxes };
