import { GET_APPLICATION_DESCRIPTION, GET_APPLICATION_QUESTIONS, POST_ANSWERS, GET_QUESTION} from "../actions/types";

const initialState = {
  applicationDescription: [],
  applicationQuestions: [],
  idOfferApplication: null,
  applicationAnswers: '',
  questionText: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_APPLICATION_DESCRIPTION:
      return {
        ...state,
        applicationDescription : action.applicationDescription,
        idOfferApplication: action.getIdOfferForApplication
      };
      case GET_APPLICATION_QUESTIONS:
      return {
        ...state,
        applicationQuestions : action.applicationQuestions,
      };
      case POST_ANSWERS:
      return {
        ...state,
        applicationAnswers : action.postAnswers
      };
      case GET_QUESTION:
      return {
        ...state,
        questionText: action.getQuestionText
      }
    default: 
      return state;
  }
};