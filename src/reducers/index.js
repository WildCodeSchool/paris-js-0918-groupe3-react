import { combineReducers } from 'redux';
import newOfferReducer from './newOfferReducer';



export default combineReducers({
  newOffer: newOfferReducer
  //Add here other state names for each reducer
});
