import { GET_ORIGINAL_QUESTIONS, POST_NEW_OFFER } from "./types";
import axios from "axios";

const domain = process.env.REACT_APP_DOMAIN_NAME;

/**
 * comment your function
 */
export const getOriginalQuestions = () => dispatch => {
  const url = `${domain}api/questions/originals`;
  axios.get(url).then(res =>{
    dispatch({
      type: GET_ORIGINAL_QUESTIONS,
      questionsList: res.data
    })}
  );
};

export const postNewOffer = (e) => dispatch => {
  const questionsAvailable = e.target.elements.questionsList.elements;
  const { title, contract_type, place, description, is_published } = e.target.elements;
  const id_companies = 1;
  const questionsList = [];
  for (let i = 0; i < questionsAvailable.length; i++) {
    if (questionsAvailable[i].checked)
      questionsList.push(questionsAvailable[i].value)
  }
  const body = {
    title : title.value,
    contract_type : contract_type.value,
    place : place.value,
    description : description.value,
    is_published : is_published.checked,
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
