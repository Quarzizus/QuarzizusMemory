import { Dispatch } from "react";
import { Action, State } from "../../reducers/general/types";

type GeneralContextType = [state: State, dispatch: Dispatch<Action>];

interface Props {
  children: JSX.Element | JSX.Element[];
}

export type { GeneralContextType, Props };
