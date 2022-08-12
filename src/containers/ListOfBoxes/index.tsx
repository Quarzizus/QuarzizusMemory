import { useState } from "react";
import { Box } from "../../components/Box";
import "./styles.scss";

const ListOfBoxes = () => {
  const [level, setLevel] = useState(1);
  const numberOfBoxes = (level + 1) * 2;
  const numberOfColumns = Math.ceil(Math.sqrt(numberOfBoxes));

  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      gridTemplateColumns: `repeat(${numberOfColumns},1fr,)`,
      gridTemplateRows: `repeat(${numberOfColumns},1fr,)`,
    },
  } as const;
  console.log(numberOfColumns);
  return (
    <>
      <section className="ListOfBoxes" style={styles.section}>
        {Array.from({ length: numberOfBoxes }, (_n) => (
          <Box />
        ))}
      </section>
      <button onClick={() => setLevel(level + 1)}> level up </button>
    </>
  );
};

export { ListOfBoxes };
