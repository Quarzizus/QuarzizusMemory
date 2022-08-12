interface State {
  currentSelecteds: number[];
  selecteds: number[];
  isMatched: null | boolean;
}

type Action =
  | { type: "SET_CURRENT_SELECTEDS"; payload: number }
  | { type: "SET_SELECTEDS" }
  | { type: "VALIDATE_IS_MATCHED" }
  | { type: "RESET_CURRENT_SELECTEDS" }
  | { type: "RESET_STATE" };

export type { State, Action };
