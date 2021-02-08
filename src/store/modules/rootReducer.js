import { combineReducers } from "redux";

import auth from "./auth/reducer";
import firmware from "./firmware/reducer";

export default combineReducers({ auth, firmware });
