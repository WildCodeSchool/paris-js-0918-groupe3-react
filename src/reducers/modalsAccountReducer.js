import {
  TOGGLE_MODAL_SIGNIN_USER,
  TOGGLE_MODAL_SIGNIN_COMPANY,
  TOGGLE_MODAL_SIGNUP_USER,
  TOGGLE_MODAL_SIGNUP_COMPANY
} from "../actions/types";

const initialState = {
  openModalSignInUser: false,
  openModalSignInCompany: false,
  openModalSignUpUser: false,
  openModalSignUpCompany: false,
  classDisplaySignInModal: "modal-desactived",
  classDisplaySignUpModal: "modal-desactived"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL_SIGNIN_USER:
      return {
        ...state,
        openModalSignInUser: !state.openModalSignInUser,
        classDisplaySignInModal: "modal-actived",
        classDisplaySignupModal: "modal-desactived"
      };
    case TOGGLE_MODAL_SIGNIN_COMPANY:
      return {
        ...state,
        openModalSignInCompany: !state.openModalSignInCompany,
        classDisplaySignInModal: "modal-actived",
        classDisplaySignupModal: "modal-desactived"
      };
    case TOGGLE_MODAL_SIGNUP_USER:
      return {
        ...state,
        openModalSignInUser: false,
        openModalSignUpUser: !state.openModalSignUpUser,
        classDisplaySignInModal: "modal-desactived",
        classDisplaySignupModal: "modal-actived"
      };
    case TOGGLE_MODAL_SIGNUP_COMPANY:
      return {
        ...state,
        openModalSignInCompany: false,
        openModalSignUpCompany: !state.openModalSignUpCompany,
        classDisplaySignInModal: "modal-desactived",
        classDisplaySignupModal: "modal-actived"
      };
    default:
      return state;
  }
}
