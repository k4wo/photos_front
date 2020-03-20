import { combineReducers } from "redux";
import { ReduxState } from "../../types/redux";

import photos from "./photos";
import albums from "./albums";
import upload from "./upload";
import pending from "./pending";
import selection from "./selection";

export default combineReducers<ReduxState, any>({
  albums,
  pending,
  photos,
  upload,
  selection
});
