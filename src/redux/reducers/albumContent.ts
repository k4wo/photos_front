import { Reducer } from "redux";

import types from "../types";
import { AlbumContentAction, AlbumContentReducer } from "../../types/redux";

const albumContent: Reducer<AlbumContentReducer, AlbumContentAction> = (
  state = [],
  action
): AlbumContentReducer => {
  switch (action.type) {
    case types.ADD_ALBUM_CONTENT:
      return action.payload;

    default:
      return state;
  }
};

export default albumContent;
