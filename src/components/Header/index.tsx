import { useContext } from "react";
import { GeneralContext } from "../../context/general/GeneralContext";
import "./styles.scss";

const Header = () => {
  const [{ level }] = useContext(GeneralContext);
  return (
    <header className="Header">
      <h1>Quarzizus Memory</h1>
      <section className="Header_level">
        <h3>
          LEVEL <span>{level}</span>
        </h3>
      </section>
    </header>
  );
};

export { Header };
