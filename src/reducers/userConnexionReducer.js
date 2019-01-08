import { GET_ID_USER } from "../actions/types";

const initialState = {
  idUser: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ID_USER:
      return {
        ...state,
        idUser: action.idUser
      };

    default:
      return state;
  }
}
