import {TOGGLE_ACCOUNT_MODAL } from "../actions/types";

const initialState = {
  openModal: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ACCOUNT_MODAL:
      return {
        ...state,
        openModal:!state.openModal
      };
   
    default:
      return state;
  }
}
