import { GET_APPLICATION_DESCRIPTION, GET_APPLICATION_QUESTIONS, POST_ANSWERS, GET_QUESTION, POST_APPLICATION } from "./types";
import axios from "axios";

const domain = process.env.REACT_APP_DOMAIN_NAME;
const token = localStorage.getItem("token");

export const getApplicationDescription = idOffer => (dispatch) => {
    const url = `${domain}api/offers/details/${idOffer}`;
    axios({
        method: "GET",
        url,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => {
        dispatch({
            type: GET_APPLICATION_DESCRIPTION,
            applicationDescription: res.data,
            getIdOfferForApplication: idOffer
        });
    });
};

export const getApplicationQuestions = ids => (dispatch) => {
    const questions = [];
    const promises = [];
    ids.forEach(id => {
        const url = `${domain}api/questions/${id}`;
        promises.push(axios.get(url).then(res => {
            questions.push(res.data)
        }))
    });
    Promise.all(promises).then(() => {
        dispatch({
            type: GET_APPLICATION_QUESTIONS,
            applicationQuestions: questions,
        });
    })
};

export const postAnswer = (idOffer, idQuestion, text, file_link) => (dispatch) => {
    const url = `${domain}api/applications/answer?offer=${idOffer}&question=${idQuestion}`;
    console.log('URL', url)
    const data = {
        text,
        file_link,
        id_questions: idQuestion,
        id_offers: idOffer
    }
    axios({
        method: "POST",
        url,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data
    }).then(res => {
        console.log('res',res)
        dispatch({
            type: POST_ANSWERS,
            postAnswer: res.data
        });
    });
};

export const getQuestion = (idQuestion) => (dispatch) => {
    const url = `${domain}api/questions/${idQuestion}`;
    axios({
        method: "GET",
        url,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => {
        dispatch({
            type: GET_QUESTION,
            getQuestionText: res.data.text
        });
    });
};

export const postApplication = (idOffer, isSent) => (dispatch) => {
    const url = `${domain}api/offers/${idOffer}/applications`;
    const data = {
        is_sent: isSent
    }
    axios({
        method: "POST",
        url,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data
    }).then(res => {
        dispatch({
            type: POST_APPLICATION,
            postApplication: res.data
        });
    });
};
