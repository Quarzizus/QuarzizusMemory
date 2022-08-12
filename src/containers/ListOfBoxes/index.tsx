import { ListOfBoxesCp } from "./styles";
import { Box } from "../../components/Box";
import { useLevelsSetup } from "../../hooks/Levels/useLevelsSetup";
import { BoxesProvider } from "../../context/boxes/BoxesContext";
import { LevelsContext } from "../../context/levels/LevelsContext";
import { useContext } from "react";

const ListOfBoxes = () => {
  const { boxes, numberOfColumnsAndRows } = useLevelsSetup();
  const { handleLevelUp } = useContext(LevelsContext);

  return (
    <BoxesProvider>
      <ListOfBoxesCp numberOfColumnsAndRows={numberOfColumnsAndRows}>
        {boxes.map((box, i) => (
          <Box id={box} key={i} />
        ))}
      </ListOfBoxesCp>
      <button onClick={handleLevelUp}> level up </button>
    </BoxesProvider>
  );
};

export { ListOfBoxes };
