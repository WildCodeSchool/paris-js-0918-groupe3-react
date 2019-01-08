import { GET_OFFERS_COMPANY, GET_COMPANY_INFO } from "./types";
import axios from "axios";

const domain = process.env.REACT_APP_DOMAIN_NAME;
const token = localStorage.getItem("token");

export const getCompanyInfo = () => dispatch => {
  const url = `${domain}api/companies`;
  axios({
    method: "GET",
    url,
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => {
    dispatch({
      type: GET_COMPANY_INFO,
      companyInfo: res.data[0]
    });
  });
};

export const getOffersCompany = bool => dispatch => {
  const url = `${domain}api/offers?is_active=${bool}`;
  axios({
    method: "GET",
    url,
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => {
    dispatch({
      type: GET_OFFERS_COMPANY,
      offersCompanyList: res.data
    });
  });
};
