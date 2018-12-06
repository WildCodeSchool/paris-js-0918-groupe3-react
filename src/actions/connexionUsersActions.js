import { GET_ID_COMPANY } from "./types";
import axios from "axios";

const domain = process.env.REACT_APP_DOMAIN_NAME;

export const getIdCompany = (email) => dispatch => {
    const url = `${domain}api/companies`;
    const body = { email }
    axios.post(url, body)
        .then(res => {

            dispatch({
                type: GET_ID_COMPANY,
                idCompany: res.data.id
            })
        });
};