import { Reducer } from "redux";

import types from "../types";
import { BasicReduxAction, PendingReducer } from "../../types/redux";

const pending: Reducer<PendingReducer, BasicReduxAction> = (
  state: PendingReducer = null,
  action: BasicReduxAction
): PendingReducer => {
  switch (action.type) {
    case types.SET_PENDING:
      return action.payload;

    default:
      return state;
  }
};

export default pending;
