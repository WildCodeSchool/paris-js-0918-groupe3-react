import { GET_ORIGINAL_QUESTIONS, POST_NEW_QUESTION } from "./types";
import axios from "axios";

const domain = process.env.REACT_APP_DOMAIN_NAME;

export const getOriginalQuestions = () => dispatch => {
  console.log('va dans dispatch getQuestions');
  
  const url = `${domain}api/questions/originals`;

  axios.get(url).then(res =>
    dispatch({
      type: GET_ORIGINAL_QUESTIONS,
      questionsList: res.data
    })
  );
};

export const postNewQuestion = (newQuestion) => dispatch => {
  const url = `${domain}api/questions/`;
  const body = {text: newQuestion}
  axios.post(url, body).then(res =>
    dispatch({
      type: POST_NEW_QUESTION,
      newQuestion: res.data
    })
  );
};
