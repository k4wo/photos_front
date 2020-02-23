import { Reducer } from "redux";

import types from "../types";
import { AlbumAction } from "../../types/redux";
import { Album } from "../../types/interfaces";

const albums: Reducer<Album[], AlbumAction> = (state = [], action): Album[] => {
  switch (action.type) {
    case types.SET_ALBUM:
      return action.payload.sort(
        (a, b) => new Date(b.createdAt).getDate() - new Date(a.createdAt).getDate()
      );

    default:
      return state;
  }
};

export default albums;
