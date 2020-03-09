import { Reducer } from "redux";

import types from "../types";
import { BasicReduxAction } from "../../types/redux";
import { Photo } from "../../types/interfaces";

const photos: Reducer<Photo[], BasicReduxAction> = (state = [], action): Photo[] => {
  switch (action.type) {
    case types.ADD_PHOTOS:
      return [...action.payload];

    default:
      return state;
  }
};

export default photos;
