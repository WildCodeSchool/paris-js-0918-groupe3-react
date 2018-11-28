import { GET_ORIGINAL_QUESTIONS } from "../actions/types";

const initialState = {
    questionsList:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    
    case GET_ORIGINAL_QUESTIONS:
    console.log('reducer list',state.questionsList);
    
      return {
        ...state,
        questionsList: action.questionsList
      };
    default:
      return state;
  }
}
