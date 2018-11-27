import { GET_ORIGINAL_QUESTIONS } from '../actions/types';

const initialState = {
  questionsList: [],
  //Write here your state properties for this reducer with there initial value
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ORIGINAL_QUESTIONS:
      return {
        ...state,
        questionsList: action.questionsList,
      };
    // case MY_ACTION_TYPE2:
    //   return {
    //     ...state,
    //     stateProperty: action.property,
    //   };
    default: 
      return state;
  }
}
