import { combineReducers } from "redux";

import settingsReducer from "./settingsReducer";
import activeMenuReducer from "./activeMenuReducer";

export default combineReducers({
  settings: settingsReducer,
  activeMenu: activeMenuReducer,
});
