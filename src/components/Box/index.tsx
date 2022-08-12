import { useContext, useRef } from "react";
import { BoxesContext } from "../../context/boxes/BoxesContext";
import { useSelectsSetup } from "../../hooks/Selects/useSelectsSetup";
import "./styles.scss";

interface Props {
  id: number;
}

const Box = ({ id }: Props) => {
  const [{ currentSelecteds }, dispatch] = useContext(BoxesContext);
  const boxRef = useRef<HTMLDivElement | null>(null);
  useSelectsSetup({ boxRef, id });

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
