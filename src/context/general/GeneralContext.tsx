import { createContext, useReducer } from "react";
import { generalReducer } from "../../reducers/general";
import { State } from "../../reducers/general/types";
import { GeneralContextType, Props } from "./types";

const GeneralContext = createContext({} as GeneralContextType);

const initialState: State = {
  level: 1,
  movements: 0,
  startGame: false,
};

const GeneralProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(generalReducer, initialState);

  return (
    <GeneralContext.Provider value={[state, dispatch]}>
      {children}
    </GeneralContext.Provider>
  );
};

export { GeneralProvider, GeneralContext };
