import { GET_ID_COMPANY } from "./types";
import axios from "axios";

const domain = process.env.REACT_APP_DOMAIN_NAME;

export const getIdCompany = (email, password) => async dispatch => {
    const url = `${domain}api/auth/signin/companies`;
    const body = { email, password }
    await axios.post(url, body)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: GET_ID_COMPANY,
                idCompany: res.data.id
            })
        })
        .catch(err => console.log(err))
};