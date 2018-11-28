import { combineReducers } from 'redux';
import getQuestionsReducer from './getQuestionsReducer';

export default combineReducers({
  getQuestions : getQuestionsReducer
  //Add here other state names for each reducer
});
