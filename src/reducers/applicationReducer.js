import { GET_APPLICATION_DESCRIPTION, GET_APPLICATION_QUESTIONS } from "../actions/types";

const initialState = {
  applicationDescription: [],
  applicationQuestions: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_APPLICATION_DESCRIPTION:
      return {
        ...state,
        applicationDescription : action.applicationDescription,
      };
      case GET_APPLICATION_QUESTIONS:
      return {
        ...state,
        applicationQuestions : action.applicationQuestions,
      };
    default: 
      return state;
  }
};