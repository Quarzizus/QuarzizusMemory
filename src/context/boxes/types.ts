import { Dispatch } from "react";
import { Action, State } from "../../reducers/boxes/types";

type BoxesContextType = [state: State, dispatch: Dispatch<Action>];

export type { BoxesContextType };
