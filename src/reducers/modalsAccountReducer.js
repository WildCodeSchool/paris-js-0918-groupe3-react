import { OPEN_ACCOUNT_MODAL, CLOSE_ACCOUNT_MODAL } from "../actions/types";

const initialState ={
    openModal:false,
    closeModal:true,
    className:""
}


export default function(state = initialState, action) {
    switch (action.type) {
      case OPEN_ACCOUNT_MODAL:
        return {
          ...state,
          openModal: true,
          className: "modal-activated"

        };
      case CLOSE_ACCOUNT_MODAL:
        return {
          ...state,
          closeModal:false,
          className: "modal-desactivated"
        };
      default: 
        return state;
    }
  };