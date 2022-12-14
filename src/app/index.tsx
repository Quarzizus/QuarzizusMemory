import { Counter } from "../components/Counter";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { StartButton } from "../components/StartButton";
import { ListOfBoxes } from "../containers/ListOfBoxes";
import "./styles.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ListOfBoxes />
      <Footer>
        <StartButton />
        <Counter />
      </Footer>
    </div>
  );
};

export { App };
