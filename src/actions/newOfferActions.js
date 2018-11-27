import { GET_ORIGINAL_QUESTIONS } from "./types";
import axios from "axios";

/**
 * comment your function
 */
export const getOriginalQuestions = () => dispatch => {
  //Code here your action and dispatch it to the reducer
  const url = `${process.env.REACT_APP_DOMAIN_NAME}api/questions/originals`;
  axios.get(url).then(res =>
    dispatch({
      type: GET_ORIGINAL_QUESTIONS,
      questionsList: res.data
    })
  );
};

// export const myAction2 = () => dispatch => {
//   dispatch({
//     type: MY_ACTION_TYPE2,
//     property: value
//   });
// };
