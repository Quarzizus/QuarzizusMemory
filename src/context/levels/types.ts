interface LevelsContextType {
  level: number;
  handleLevelUp: () => void;
}
interface Props {
  children: JSX.Element | JSX.Element[];
}

export type { LevelsContextType, Props };
