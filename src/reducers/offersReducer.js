import { GET_OFFERS } from "../actions/types";

const initialState = {
  offersList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_OFFERS:
      return {
        ...state,
        offersList: action.offersList
      };

    default:
      return state;
  }
}
