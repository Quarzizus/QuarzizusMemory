import { useState } from "react";
import { ListOfBoxesCp } from "./styles";
import { Box } from "../../components/Box";
import { useLevelsSetup } from "../../hooks/Levels/useLevelsSetup";

const ListOfBoxes = () => {
  const { handleLevelUp, boxes, numberOfColumnsAndRows } = useLevelsSetup();

  return (
    <>
      <ListOfBoxesCp numberOfColumnsAndRows={numberOfColumnsAndRows}>
        {boxes.map((box) => (
          <Box id={box} />
        ))}
      </ListOfBoxesCp>
      <button onClick={handleLevelUp}> level up </button>
    </>
  );
};

export { ListOfBoxes };
