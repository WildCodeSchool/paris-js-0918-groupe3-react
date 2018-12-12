import { GET_OFFERS, FETCH_CITIES } from "../actions/types";

const initialState = {
  offersList: [],
  citiesList: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_OFFERS:
      return {
        ...state,
        offersList: action.offersList
      };
    case FETCH_CITIES:
      return {
        ...state,
        citiesList: action.citiesList,
      }

    default:
      return state;
  }
}
