import { combineReducers } from "redux";
import { ReduxState } from "../../types/redux";

import photos from "./photos";
import albums from "./albums";
import upload from "./upload";
import viewer from "./viewer";
import pending from "./pending";

export default combineReducers<ReduxState, any>({
  albums,
  photos,
  upload,
  viewer,
  pending
});
