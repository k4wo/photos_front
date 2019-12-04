import { combineReducers } from "redux";
import { BasicReduxAction, ReduxState } from "../../constants/interfaces";

import photos from "./photos";
import albums from "./albums";

export default combineReducers<ReduxState, BasicReduxAction>({
  albums,
  photos
});
