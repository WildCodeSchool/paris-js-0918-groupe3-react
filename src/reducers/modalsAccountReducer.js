import {
  TOGGLE_MODAL_SIGNIN_USER,
  TOGGLE_MODAL_SIGNIN_COMPANY,
  TOGGLE_MODAL_SIGNUP_USER,
  TOGGLE_MODAL_SIGNUP_COMPANY,
  TOGGLE_MODAL_CLOSE
} from "../actions/types";

const initialState = {
  modalAccountType: "",
  classDisplaySignInModal: "modal-signin-desactived",
  classDisplaySignUpModal: "modal-signup-desactived"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL_SIGNIN_USER:
      return {
        ...state,
        modalAccountType: "USER",
        classDisplaySignInModal: "modal-signin-actived",
        classDisplaySignUpModal: "modal-signup-desactived"
      };
    case TOGGLE_MODAL_SIGNIN_COMPANY:
      return {
        ...state,
        modalAccountType: "COMPANY",
        classDisplaySignInModal: "modal-signin-actived",
        classDisplaySignUpModal: "modal-signup-desactived"
      };
    case TOGGLE_MODAL_SIGNUP_USER:
      return {
        ...state,
        modalAccountType: "USER",
        classDisplaySignInModal: "modal-signin-desactived",
        classDisplaySignUpModal: "modal-signup-actived"
      };
    case TOGGLE_MODAL_SIGNUP_COMPANY:
      return {
        ...state,
        modalAccountType: "COMPANY",
        classDisplaySignInModal: "modal-signin-desactived",
        classDisplaySignUpModal: "modal-signup-actived"
      };
    case TOGGLE_MODAL_CLOSE:
      return {
        ...state,
        modalAccountType: "",
        classDisplaySignInModal: "modal-signin-desactived",
        classDisplaySignUpModal: "modal-signup-desactived"
      };
    default:
      return state;
  }
}
