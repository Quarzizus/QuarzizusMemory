import { useContext, useEffect, useRef } from "react";
import { validateIsSelected } from "../../actions/validateIsSelected";
import { BoxesContext } from "../../context/boxes/BoxesContext";
import "./styles.scss";

interface Props {
  id: number;
}

const Box = ({ id }: Props) => {
  const [{ currentSelecteds, selecteds, isMatched }, dispatch] =
    useContext(BoxesContext);

  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (currentSelecteds.length === 2) {
      dispatch({
        type: "VALIDATE_IS_MATCHED",
      });
    }
  }, [currentSelecteds.length]);

  useEffect(() => {
    if (isMatched === null) return;
    if (!!isMatched) {
      dispatch({ type: "SET_SELECTEDS" });
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
      dispatch({ type: "RESET_CURRENT_SELECTEDS" });
    }
  }, [selecteds.length]);

  const handleSelect = () => {
    if (currentSelecteds.length >= 2) return;
    dispatch({
      type: "SET_CURRENT_SELECTEDS",
      payload: id,
    });
    boxRef.current?.classList.add("Selected");
  };
  return (
    <div className="Box" ref={boxRef} onClick={handleSelect}>
      {id}
    </div>
  );
};

export { Box };
