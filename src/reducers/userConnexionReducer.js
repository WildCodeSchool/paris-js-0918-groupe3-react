import { GET_ID_USER, SIGNUP_USER, PUT_NEW_PASSWORD, GET_TOKEN_NEW_PASSWORD } from "../actions/types";

const initialState = {
  idUser: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ID_USER:
      return {
        ...state,
        idUser: action.idUser
      };
    case SIGNUP_USER:
      return {
        ...state
      };
    case PUT_NEW_PASSWORD:
      return {
        ...state
      };
    case GET_TOKEN_NEW_PASSWORD:
      return {
        ...state
      };
    default:
      return state;
  }
}
