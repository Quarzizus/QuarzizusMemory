import "./styles.scss";

interface Props {
  id: number;
}

const Box = ({ id }: Props) => {
  const log = () => {
    console.log(id);
  };
  return (
    <div className="Box" onClick={log}>
      {id}
    </div>
  );
};

export { Box };
