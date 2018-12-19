import {TOGGLE_USER_ACCOUNT_MODAL, TOGGLE_ENT_ACCOUNT_MODAL  } from "../actions/types";

const initialState = {
  openEntModal: false,
  openUserModal:false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_USER_ACCOUNT_MODAL:
      return {
        ...state,
        openUserModal:!state.openUserModal,
        openEntModal:!state.openEntModal
      };
      case TOGGLE_ENT_ACCOUNT_MODAL:
      return {
        ...state,
        openEntModal:!state.openEntModal,
        openUserModal:!state.openUserModal
      };
    default:
      return state;
  }
}
