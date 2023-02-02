/* eslint-disable import/no-cycle */
import { all, put, takeLatest } from "redux-saga/effects";
import authActions from "./actions";
import { AuthApi } from "./api";
import { IUserLogin } from "./interface";

function* login(user: IUserLogin): Generator<any> {
  const response: any = yield AuthApi.login(user);

  if (response?.token)
    return yield put(
      authActions.loginResponse({
        token: "",
      })
    );
  const err = new TypeError(response.status);

  return yield put(authActions.loginResponse(err, response));
}

function* ActionWatcher() {
  yield takeLatest(authActions.login, login);
}

export default function* rootSaga() {
  yield all([ActionWatcher()]);
}
