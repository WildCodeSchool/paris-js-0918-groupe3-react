import { GET_APPLICATION_QUESTIONS } from "./types";
import axios from "axios";

const domain = process.env.REACT_APP_DOMAIN_NAME;

export const getApplicationQuestions = id => (dispatch) => {
    const url = `${domain}api/offers/details/${id}`;
    axios.get(url).then(res => {
        dispatch ({ 
            type: GET_APPLICATION_QUESTIONS,
            applicationQuestions: res.data,
        });
    });
};