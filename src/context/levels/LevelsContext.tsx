import { createContext, useState } from "react";
import { LevelsContextType, Props } from "./types";

const LevelsContext = createContext({} as LevelsContextType);

const LevelsProvider = ({ children }: Props) => {
  const [level, setLevel] = useState(1);

  const handleLevelUp = () => {
    setLevel(level + 1);
  };

  const values = { level, handleLevelUp };

  return (
    <LevelsContext.Provider value={values}>{children}</LevelsContext.Provider>
  );
};

export { LevelsContext, LevelsProvider };
