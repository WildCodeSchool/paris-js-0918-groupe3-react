import { GET_ORIGINAL_QUESTIONS } from "./types";
import axios from "axios";

const domain = process.env.REACT_APP_DOMAIN_NAME;

export const getOriginalQuestions = () => dispatch => {
  const url = `${domain}api/questions/originals`;
  console.log("action", GET_ORIGINAL_QUESTIONS);

  axios.get(url).then(res =>
    dispatch({
      type: GET_ORIGINAL_QUESTIONS,
      questionsList: res.data
    })
  );
};
