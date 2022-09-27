import { HEAD_TAIL_ACTION_TYPES } from "./head-tail.types";

const createAction = (type, payload) => ({ type, payload });

export const setCurrentSelection = (selection, selectionArray) => {
  selectionArray.push(selection);
  return createAction(
    HEAD_TAIL_ACTION_TYPES.SET_CURRENT_SELECTION,
    selectionArray
  );
};
