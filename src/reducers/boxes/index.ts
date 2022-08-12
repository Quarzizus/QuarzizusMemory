import { Action, State } from "./types";

const BoxesReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_CURRENT_SELECTEDS":
      return {
        ...state,
        currentSelecteds: [...state.currentSelecteds, action.payload],
      };
    case "SET_SELECTEDS":
      return {
        ...state,
        selecteds: [...state.selecteds, state.currentSelecteds[0]],
      };
    case "VALIDATE_IS_MATCHED":
      return {
        ...state,
        isMatched: state.currentSelecteds[0] === state.currentSelecteds[1],
      };
    case "RESET_CURRENT_SELECTEDS":
      return {
        ...state,
        currentSelecteds: [],
        isMatched: null,
      };
    default:
      return state;
  }
};

export { BoxesReducer };
