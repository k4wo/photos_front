import { combineReducers } from "redux";
import { ReduxState } from "../../types/redux";

import photos from "./photos";
import albums from "./albums";
import upload from "./upload";
import viewer from "./viewer";
import pending from "./pending";
import albumContent from "./albumContent";
import selection from "./selection";

export default combineReducers<ReduxState, any>({
  albumContent,
  albums,
  pending,
  photos,
  upload,
  viewer,
  selection
});
