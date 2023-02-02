/* eslint-disable import/no-cycle */
import { all, fork } from "redux-saga/effects";

import AuthSaga from "../services/auth/saga";

export default function* rootSaga() {
  yield all([fork(AuthSaga)]);
}
