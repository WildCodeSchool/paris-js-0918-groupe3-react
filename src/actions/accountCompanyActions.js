import { GET_OFFERS_COMPANY, GET_COMPANY_INFO, GET_APPLICATIONS_COMPANY, PUT_STATUS_APPLICATION } from './types';
import axios from 'axios';


const domain = process.env.REACT_APP_DOMAIN_NAME;
const token = localStorage.getItem("token");



export const getCompanyInfo = () => dispatch => {
  const url = `${domain}companies`;
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
  const url = `${domain}offers?is_active=${bool}`;
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

export const getApplicationsOnOffers = (id) => (dispatch) => {
  const url = `${domain}offers/${id}/applications`;
  axios({
    method: 'GET',
    url,
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => {
      dispatch({
        type: GET_APPLICATIONS_COMPANY,
        applicationsCompanyList: res.data
      })
    })
}

export const putStatusApplication = (id_offers, id_candidates, status) => (dispatch) => {
  const url = `${domain}applications/status`;
  const data = {
    id_offers,
    id_candidates,
    status
  }
  axios.put(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => {
      dispatch({
        type: PUT_STATUS_APPLICATION,
      })
    })
}
