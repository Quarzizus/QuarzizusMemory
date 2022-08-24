import "./styles.scss";
import { characterIcons } from "../../assets";
const Character = ({ id }: { id: number }) => {
  return (
    <picture className="Character">
      <img src={characterIcons[id]} alt="" />
    </picture>
  );
};

export { Character };
