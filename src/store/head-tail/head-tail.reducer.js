import { HEAD_TAIL_ACTION_TYPES } from "./head-tail.types";

const INITIAL_STATE = {
  selectionArray: [],
};

export const headTailReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case HEAD_TAIL_ACTION_TYPES.SET_CURRENT_SELECTION:
      return {
        ...state,
        selectionArray: payload,
      };

    default:
      return state;
  }
};
