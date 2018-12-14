import { OPEN_MODAL, CLOSE_MODAL } from "./types";

export const openModal = dispatch => {
  dispatch({
    type: OPEN_MODAL,
    openModal: true,
    modalDisplay: "modal-activated"
  });
};

export const closeModal = dispatch => {
  dispatch({
    type: CLOSE_MODAL,
    closeModal: false,
    modalDisplay: "modal-desactivated"
  });
};
