import { GET_OFFERS_COMPANY} from "../actions/types";

const initialState = {
  offersList: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_OFFERS_COMPANY:
      return {
        ...state,
        offersList : action.offersCompanyList
      };

    default: 
      return state;
  }
};