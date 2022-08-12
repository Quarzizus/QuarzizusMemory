import { ListOfBoxesCp } from "./styles";
import { Box } from "../../components/Box";
import { useLevelsSetup } from "../../hooks/Levels/useLevelsSetup";
import { BoxesProvider } from "../../context/boxes/BoxesContext";
import { GeneralContext } from "../../context/general/GeneralContext";
import { useContext } from "react";

const ListOfBoxes = () => {
  const { boxes, numberOfColumnsAndRows } = useLevelsSetup();
  const [_, dispatch] = useContext(GeneralContext);

  return (
    <BoxesProvider>
      <ListOfBoxesCp numberOfColumnsAndRows={numberOfColumnsAndRows}>
        {boxes.map((box, i) => (
          <Box id={box} key={i} />
        ))}
      </ListOfBoxesCp>
    </BoxesProvider>
  );
};

export { ListOfBoxes };
