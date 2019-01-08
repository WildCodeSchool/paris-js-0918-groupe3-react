import { GET_OFFERS_COMPANY, GET_COMPANY_INFO, GET_APPLICATIONS_COMPANY } from './types';
import axios from 'axios';

const domain = process.env.REACT_APP_DOMAIN_NAME;
const token = localStorage.getItem('token');

export const getCompanyInfo = (id) => (dispatch) => {
    const url = `${domain}api/companies/${id}`;
    axios({
        method: 'GET',
        url,
        headers: {
            Autorization: `Bearer ${token}`,
        }
    })
    .then(res => {
        dispatch({
            type: GET_COMPANY_INFO,
            companyInfo: res.data[0],
        })
    });
}

export const getOffersCompany = (id, bool) => (dispatch) => {
    const url = `${domain}api/offers/${id}?is_active=${bool}`;
    axios({
        method: 'GET',
        url,
        headers: {
            Autorization: `Bearer ${token}`,
        }
    })
    .then(res => {
        dispatch({
            type: GET_OFFERS_COMPANY,
            offersCompanyList: res.data
        })
    }
    )
};

export const getApplicationsOnOffers = (id) => (dispatch) => {
    const url = `${domain}api/offers/${id}/applications`;
    axios({
        method: 'GET',
        url,
        headers:{
            Autorization: `Bearer ${token}`,
        }
    })
    .then(res => {
        dispatch({
            type: GET_APPLICATIONS_COMPANY,
            applicationsCompanyList: res.data
        })
    })
}
