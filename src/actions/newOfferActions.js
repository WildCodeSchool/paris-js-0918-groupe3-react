import { GET_ORIGINAL_QUESTIONS, POST_NEW_OFFER } from "./types";
import axios from "axios";

const domain = process.env.REACT_APP_DOMAIN_NAME;

export const getOriginalQuestions = () => dispatch => {
  const url = `${domain}api/questions/originals`;
  axios.get(url).then(res =>{
    dispatch({
      type: GET_ORIGINAL_QUESTIONS,
      questionsList: res.data
    })}
  );
};

export const postNewOffer = (values) => dispatch => {
  const { title, contract_type, place, description, is_published } = values;
  const id_companies = 1;
  const questionsList = [];
  for (let prop in values) {
    if (prop.includes('question') && values[prop]){
      questionsList.push(prop.split('').pop());
    }
  }
  console.log('questionsList', questionsList)
  const body = {
    title,
    contract_type,
    place,
    description,
    is_published,
  }
  const url = `${domain}api/offers/${id_companies}?questions=${questionsList}`;
  console.log(url)
  axios.post(url, body)
    .then(res => {
      alert('Nouvelle offre correctement postée.')
      dispatch({
      type: POST_NEW_OFFER,
      })
    })
    .catch(err => {throw err}) 
};
