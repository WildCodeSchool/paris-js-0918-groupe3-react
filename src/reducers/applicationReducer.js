import { GET_APPLICATION_QUESTIONS } from "../actions/types";

const initialState = {
  applicationQuestions: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_APPLICATION_QUESTIONS:
      return {
        ...state,
        applicationQuestions : action.applicationQuestions,
      };
    default: 
      return state;
  }
};