import { useContext, useEffect } from "react";
import { validateIsSelected } from "../../actions/validateIsSelected";
import { BoxesContext } from "../../context/boxes/BoxesContext";
import { GeneralContext } from "../../context/general/GeneralContext";
import { useLevelsSetup } from "../Levels/useLevelsSetup";

interface Props {
  boxRef: React.MutableRefObject<HTMLDivElement | null>;
  id: number;
}

const useSelectsSetup = ({ boxRef, id }: Props) => {
  const [{ currentSelecteds, selecteds, isMatched }, dispatch] =
    useContext(BoxesContext);
  const [{ level }, generalDispatch] = useContext(GeneralContext);

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

    // matched
    if (!!isMatched) {
      dispatch({ type: "SET_SELECTEDS" });
      return;
    }
    // no matched
    if (!isMatched) {
      setTimeout(() => {
        boxRef.current?.classList.remove("Selected");
        dispatch({ type: "RESET_CURRENT_SELECTEDS" });
      }, 1000);
    }
  }, [isMatched]);

  useEffect(() => {
    // Add class matched
    if (validateIsSelected(selecteds, id)) {
      boxRef.current?.classList.replace("Selected", "Matched");
      dispatch({ type: "RESET_CURRENT_SELECTEDS" });
    }
    // level up
    if (selecteds.length === numberOfBoxes) {
      setTimeout(() => {
        boxRef.current?.classList.remove("Matched");
        dispatch({
          type: "RESET_STATE",
        });
        generalDispatch({ type: "SET_LEVEL", payload: level + 1 });
      }, 1000);
    }
  }, [selecteds.length]);
};

export { useSelectsSetup };
