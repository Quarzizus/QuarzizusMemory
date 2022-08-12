import { Header } from "../components/Header";
import { ListOfBoxes } from "../containers/ListOfBoxes";
import "./styles.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ListOfBoxes />
    </div>
  );
};

export { App };
