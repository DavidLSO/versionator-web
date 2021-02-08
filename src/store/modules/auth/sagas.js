import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";
import { signInSuccess, signFailure } from "./actions";
import history from "~/services/history";
import api from "~/services/api";

export function* signIn({ payload }) {
  try {
    const { username, password } = payload;

    const response = yield call(api.post, "signin/", {
      username,
      password,
    });

    const { token } = response.data;

    api.defaults.headers.Authorization = `Token ${token}`;

    yield put(signInSuccess(token));

    history.push("/dashboard");
  } catch (error) {
    toast.error("Falha na authenticação, verifique seus dados");
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Token ${token}`;
  }
}
export function signOut() {
  history.push("/");
}

export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_OUT", signOut),
  takeLatest("persist/REHYDRATE", setToken),
]);
