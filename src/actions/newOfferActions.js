import axios from 'axios';
import { GET_ORIGINAL_QUESTIONS, POST_NEW_OFFER, POST_NEW_QUESTION } from './types';

const domain = process.env.REACT_APP_DOMAIN_NAME;

export const getOriginalQuestions = () => (dispatch) => {
  const url = `${domain}api/questions/originals`;
  axios.get(url).then((res) => {
    dispatch({
      type: GET_ORIGINAL_QUESTIONS,
      questionsList: res.data,
    });
  });
};


export const postNewQuestion = newQuestion => (dispatch) => {
  const url = `${domain}api/questions/`;
  const body = { text: newQuestion };
  axios.post(url, body).then(res => dispatch({
    type: POST_NEW_QUESTION,
    newQuestion: res.data,
  }));
};

export const postNewOffer = values => (dispatch) => {
  const {
    title,
    contract_type, 
    place,
    description,
    is_published,
  } = values;
  const id_companies = 1;
  const questionsList = [];
  for (let prop in values) {
    if (prop.includes('question') && values[prop]){
      questionsList.push(prop.substr(8));
    }
  };
  const body = {
    title,
    contract_type,
    place,
    description,
    is_published,
  };
  const url = `${domain}api/offers/${id_companies}?questions=${questionsList}`;
  axios.post(url, body)
    .then(() => {
      dispatch({
        type: POST_NEW_OFFER,
      });
    })
    .catch((err) => { throw err; });
};
