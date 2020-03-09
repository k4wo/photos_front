import { Reducer } from "redux";

import types from "../types";
import { SelectionReducer, BasicReduxAction } from "../../types/redux";

const selection: Reducer<SelectionReducer, BasicReduxAction> = (
  state = {},
  action
): SelectionReducer => {
  switch (action.type) {
    case types.SET_SELECTION:
      return action.payload;

    default:
      return state;
  }
};

export default selection;
