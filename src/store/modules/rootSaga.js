import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import firmware from "./firmware/saga";

export default function* rootSaga() {
  return yield all([auth, firmware]);
}
