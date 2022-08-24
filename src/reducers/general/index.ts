import { Action, State } from "./types";

const generalReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_LEVEL":
      return {
        ...state,
        level: action.payload,
      };

    case "SET_START_GAME":
      return {
        ...state,
        startGame: action.payload,
      };
    default:
      return state;
  }
};

export { generalReducer };
