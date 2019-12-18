import { Reducer } from "redux";

import types from "../types";
import { ViewerReducer, BasicReduxAction } from "../../types/redux";

const viewer: Reducer<ViewerReducer, BasicReduxAction> = (
  state: ViewerReducer = null,
  action: BasicReduxAction
): ViewerReducer => {
  switch (action.type) {
    case types.SET_VIEWER:
      return action.payload;

    default:
      return state;
  }
};

export default viewer;
