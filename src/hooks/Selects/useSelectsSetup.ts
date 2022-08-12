import { useContext, useEffect } from "react";
import { validateIsSelected } from "../../actions/validateIsSelected";
import { BoxesContext } from "../../context/boxes/BoxesContext";
import { LevelsContext } from "../../context/levels/LevelsContext";
import { useLevelsSetup } from "../Levels/useLevelsSetup";

interface Props {
  boxRef: React.MutableRefObject<HTMLDivElement | null>;
  id: number;
}

const useSelectsSetup = ({ boxRef, id }: Props) => {
  const [{ currentSelecteds, selecteds, isMatched }, dispatch] =
    useContext(BoxesContext);
  const { handleLevelUp } = useContext(LevelsContext);

  const { numberOfBoxes } = useLevelsSetup();

  useEffect(() => {
    if (currentSelecteds.length === 2) {
      dispatch({
        type: "VALIDATE_IS_MATCHED",
      });
    }
  }, [currentSelecteds.length]);

  useEffect(() => {
    if (!validateIsSelected(currentSelecteds, id)) return;
    if (isMatched === null) return;
    if (!!isMatched) {
      dispatch({ type: "SET_SELECTEDS" });
      return;
    }
    setTimeout(() => {
      if (!isMatched) {
        boxRef.current?.classList.remove("Selected");
        dispatch({ type: "RESET_CURRENT_SELECTEDS" });
      }
    }, 1000);
  }, [isMatched]);

  useEffect(() => {
    if (validateIsSelected(selecteds, id)) {
      boxRef.current?.classList.replace("Selected", "Matched");
      console.log(selecteds);
      dispatch({ type: "RESET_CURRENT_SELECTEDS" });
    }
    if (selecteds.length === numberOfBoxes) {
      setTimeout(() => {
        boxRef.current?.classList.remove("Matched");
        dispatch({
          type: "RESET_STATE",
        });
        handleLevelUp();
      }, 1000);
    }
  }, [selecteds.length]);
};

export { useSelectsSetup };
