export function getFirmwareRequest() {
  return {
    type: "@firmware/GET_FIRMWARE_REQUEST",
  };
}
export function getFirmwareFailure() {
  return {
    type: "@firmware/GET_FIRMWARE_FAILURE",
  };
}

export function getFirmwareSuccess(firmware) {
  return {
    type: "@firmware/GET_FIRMWARE_SUCCESS",
    payload: { firmware },
  };
}
export function addFirmwareRequest(data) {
  return {
    type: "@firmware/ADD_FIRMWARE_REQUEST",
    payload: { data },
  };
}

export function addFirmwareSuccess(firmware) {
  return {
    type: "@firmware/ADD_FIRMWARE_SUCCESS",
    payload: { firmware },
  };
}

export function addFirmwareFailure() {
  return {
    type: "@firmware/ADD_FIRMWARE_FAILURE",
  };
}
