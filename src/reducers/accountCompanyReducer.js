import { GET_OFFERS_COMPANY, GET_COMPANY_INFO, GET_APPLICATIONS_COMPANY, PUT_STATUS_APPLICATION } from "../actions/types";

const initialState = {
  offersList: [],
  companyInfo: [],
  applicationsCompany: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_OFFERS_COMPANY:
      return {
        ...state,
        offersList: action.offersCompanyList,
      };
    case GET_COMPANY_INFO:
      return {
        ...state,
        companyInfo: action.companyInfo,
      }
    case GET_APPLICATIONS_COMPANY:
      return {
        ...state,
        applicationsCompany: action.applicationsCompanyList
      }
    case PUT_STATUS_APPLICATION:
      return {
        ...state,
      }
    default:
      return state;
  }
};