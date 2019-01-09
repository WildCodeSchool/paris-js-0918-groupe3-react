import { GET_APPLICATION_DESCRIPTION, GET_APPLICATION_QUESTIONS } from "./types";
import axios from "axios";

const domain = process.env.REACT_APP_DOMAIN_NAME;

export const getApplicationDescription = id => (dispatch) => {
    const url = `${domain}api/offers/details/${id}`;
    axios.get(url).then(res => {
        dispatch ({ 
            type: GET_APPLICATION_DESCRIPTION,
            applicationDescription: res.data,
        });
    });
};

export const getApplicationQuestions = ids => async (dispatch) => {
    const questions = [];
    await ids.forEach(id => {
        const url = `${domain}api/questions/${id}`;
        axios.get(url).then(res => {
            questions.push(res.data)
        });
    });
    dispatch ({ 
        type: GET_APPLICATION_QUESTIONS,
        applicationQuestions: questions,
    });
};
        
