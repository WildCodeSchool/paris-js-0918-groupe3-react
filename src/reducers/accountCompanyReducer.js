import { GET_OFFERS_COMPANY, GET_COMPANY_INFO } from "../actions/types";

const initialState = {
  offersList: [],
  companyInfo: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_OFFERS_COMPANY:
      return {
        ...state,
        offersList : action.offersCompanyList,
      };
    case GET_COMPANY_INFO:
      return {
        ...state,
        companyInfo : action.companyInfo,
      }

    default: 
      return state;
  }
};