import { createContext, useReducer } from "react";
import { BoxesReducer } from "../../reducers/boxes";
import { State } from "../../reducers/boxes/types";
import { BoxesContextType } from "./types";

const BoxesContext = createContext({} as BoxesContextType);

interface Props {
  children: JSX.Element | JSX.Element[];
}

const initialState: State = {
  currentSelecteds: [],
  selecteds: [],
  isMatched: null,
};

const BoxesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(BoxesReducer, initialState);

  return (
    <BoxesContext.Provider value={[state, dispatch]}>
      {children}
    </BoxesContext.Provider>
  );
};

export { BoxesProvider, BoxesContext };
