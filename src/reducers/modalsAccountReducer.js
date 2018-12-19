import {
  TOGGLE_MODAL_SIGNIN_USER,
  TOGGLE_MODAL_SIGNIN_COMPANY,
  TOGGLE_MODAL_SIGNUP_USER,
  TOGGLE_MODAL_SIGNUP_COMPANY
} from "../actions/types";

const initialState = {
  modalAccountType: "",
  classDisplaySignInModal: "modal-desactived",
  classDisplaySignUpModal: "modal-desactived"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL_SIGNIN_USER:
      return {
        ...state,
        modalAccountType: "COMPANY",
        classDisplaySignInModal: "modal-actived",
        classDisplaySignupModal: "modal-desactived"
      };
    case TOGGLE_MODAL_SIGNIN_COMPANY:
      return {
        ...state,
        modalAccountType: "COMPANY",
        classDisplaySignInModal: "modal-actived",
        classDisplaySignupModal: "modal-desactived"
      };
    case TOGGLE_MODAL_SIGNUP_USER:
      return {
        ...state,
        modalAccountType: "USER",
        classDisplaySignInModal: "modal-desactived",
        classDisplaySignupModal: "modal-actived"
      };
    case TOGGLE_MODAL_SIGNUP_COMPANY:
      return {
        ...state,
        modalAccountType: "COMPANY",
        classDisplaySignInModal: "modal-desactived",
        classDisplaySignupModal: "modal-actived"
      };
    default:
      return state;
  }
}
