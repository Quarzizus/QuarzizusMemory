interface State {
  level: number;
  startGame: boolean;
}

type Action =
  | { type: "SET_LEVEL"; payload: number }
  | { type: "SET_START_GAME"; payload: boolean };

export type { State, Action };
