import { all, takeLatest, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "~/services/api";
import {
  getFirmwareRequest,
  addFirmwareFailure,
  getFirmwareSuccess,
  getFirmwareFailure,
} from "./actions";

export function* addFirmware({ payload }) {
  try {
    const response = yield call(api.post, "api/v1/firmware/", payload.data);

    toast.success("Firmware Adicionado com sucesso!");

    yield put(getFirmwareRequest(response.data));
  } catch (err) {
    console.tron.error(err);
    toast.error("Erro ao adicionar o firmware, confira seus dados!");
    yield put(addFirmwareFailure());
  }
}

export function* getFirmware() {
  try {
    const response = yield call(api.get, "api/v1/firmware/");

    yield put(getFirmwareSuccess(response.data.results));
  } catch (err) {
    console.tron.error(err);
    toast.error("Erro ao adicionar o firmware, confira seus dados!");
    yield put(getFirmwareFailure());
  }
}

export default all([
  takeLatest("@firmware/ADD_FIRMWARE_REQUEST", addFirmware),
  takeLatest("@firmware/GET_FIRMWARE_REQUEST", getFirmware),
]);
