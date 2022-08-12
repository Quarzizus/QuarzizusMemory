interface Props {
  children: JSX.Element | JSX.Element[];
}

import "./styles.scss";

const Footer = ({ children }: Props) => {
  return <footer className="Footer">{children}</footer>;
};

export { Footer };
