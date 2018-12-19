import { TOGGLE_USER_ACCOUNT_MODAL, TOGGLE_ENT_ACCOUNT_MODAL } from "./types";

export const toggleModalUserAccount = () => dispatch => {
  dispatch({
    type: TOGGLE_USER_ACCOUNT_MODAL
  });
};


export const toggleModalEntAccount = () => dispatch => {
  dispatch({
    type: TOGGLE_ENT_ACCOUNT_MODAL
  });
};

