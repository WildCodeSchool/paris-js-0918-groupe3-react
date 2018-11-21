import { combineReducers } from 'redux';
import myReducer from './myReducer';


export default combineReducers({
  stateName: myReducer,
  //Add here other state names for each reducer
});
