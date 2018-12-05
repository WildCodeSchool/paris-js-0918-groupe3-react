import { combineReducers } from 'redux';
import newOfferReducer from './newOfferReducer';

export default combineReducers({
  newOffer: newOfferReducer,
});
