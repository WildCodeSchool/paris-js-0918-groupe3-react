import { GET_OFFERS_COMPANY } from './types';
import axios from 'axios';

const domain = process.env.REACT_APP_DOMAIN_NAME;

export const getOffersCompany = (id, bool) => dispatch => {
    const url = `${domain}api/offers/${id}?is_active=${bool}`
    axios.get(url).then(res => {
        dispatch({
            type: GET_OFFERS_COMPANY,
            offersCompanyList: res.data
        })
    }
    )
};
