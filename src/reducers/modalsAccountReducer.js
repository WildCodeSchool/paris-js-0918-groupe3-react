import { OPEN_ACCOUNT_MODAL, CLOSE_ACCOUNT_MODAL } from "../actions/types";

const initialState = {
  openModal: false,
  closeModal: true,
  modalDisplay: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_ACCOUNT_MODAL:
      return {
        ...state,
        openModal: action.openModal,
        modalDisplay: action.modalDisplay
      };
    case CLOSE_ACCOUNT_MODAL:
      return {
        ...state,
        closeModal: action.closeModal,
        modalDisplay: action.modalDisplay
      };
    default:
      return state;
  }
}
