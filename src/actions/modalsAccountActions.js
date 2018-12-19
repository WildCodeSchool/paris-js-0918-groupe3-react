import { TOGGLE_MODAL_SIGNIN_USER, TOGGLE_MODAL_SIGNIN_COMPANY, TOGGLE_MODAL_SIGNUP_USER, TOGGLE_MODAL_SIGNUP_COMPANY } from "./types";

export const toggleModaSignInUser = () => dispatch => {
  dispatch({
    type: TOGGLE_MODAL_SIGNIN_USER
  });
};


export const toggleModaSignInCompany = () => dispatch => {
  dispatch({
    type: TOGGLE_MODAL_SIGNIN_COMPANY
  });
};

export const toggleModaSignUpUser = () => dispatch => {
  dispatch({
    type: TOGGLE_MODAL_SIGNUP_USER
  });
};
export const toggleModaSignUpCompany = () => dispatch => {
  dispatch({
    type: TOGGLE_MODAL_SIGNUP_COMPANY
  });
};

