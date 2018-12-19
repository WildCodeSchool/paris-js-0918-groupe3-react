import { TOGGLE_MODAL_SIGNIN_USER, TOGGLE_MODAL_SIGNIN_COMPANY, TOGGLE_MODAL_SIGNUP_USER, TOGGLE_MODAL_SIGNUP_COMPANY } from "./types";

export const toggleModalSignInUser = () => dispatch => {
  dispatch({
    type: TOGGLE_MODAL_SIGNIN_USER
  });
};


export const toggleModalSignInCompany = () => dispatch => {
  dispatch({
    type: TOGGLE_MODAL_SIGNIN_COMPANY
  });
};

export const toggleModalSignUpUser = () => dispatch => {
  dispatch({
    type: TOGGLE_MODAL_SIGNUP_USER
  });
};
export const toggleModalSignUpCompany = () => dispatch => {
  dispatch({
    type: TOGGLE_MODAL_SIGNUP_COMPANY
  });
};

export const toggleModalClose = () => dispatch => {
  dispatch({
    type: TOGGLE_MODAL_CLOSE
  });
};
