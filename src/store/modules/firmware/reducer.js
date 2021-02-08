import produce from "immer";

const INITIAL_STATE = {
  firmware: [],
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@firmware/GET_FIRMWARE_SUCCESS":
      return produce(state, (draft) => {
        draft.firmware = action.payload.firmware;
      });
    default:
      return state;
  }
}
