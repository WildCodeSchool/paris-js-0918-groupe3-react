import { GET_ID_COMPANY} from "../actions/types";

const initialState = {
    initialState: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ID_COMPANY:
      return {
        ...state,
        idCompany : action.idCompany
      };

    default: 
      return state;
  }
};