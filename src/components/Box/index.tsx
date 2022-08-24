import { useContext, useRef } from "react";
import { BoxesContext } from "../../context/boxes/BoxesContext";
import { GeneralContext } from "../../context/general/GeneralContext";
import { useSelectsSetup } from "../../hooks/Selects/useSelectsSetup";
import { Character } from "../Character";
import "./styles.scss";

interface Props {
  id: number;
}

const Box = ({ id }: Props) => {
  const [{ startGame }] = useContext(GeneralContext);
  const [{ currentSelecteds }, dispatch] = useContext(BoxesContext);
  const boxRef = useRef<HTMLDivElement | null>(null);
  useSelectsSetup({ boxRef, id });

  const handleSelect = () => {
    if (boxRef.current?.classList.contains("Selected")) return;
    if (boxRef.current?.classList.contains("Matched")) return;
    if (!startGame) return;
    if (currentSelecteds.length >= 2) return;
    dispatch({
      type: "SET_CURRENT_SELECTEDS",
      payload: id,
    });
    boxRef.current?.classList.add("Selected");
  };
  return (
    <div className="Box" ref={boxRef} onClick={handleSelect}>
      <Character id={id} />
    </div>
  );
};

export { Box };
