import { combineReducers } from 'redux';
import newOfferReducer from './newOfferReducer';
import offersReducer from './offersReducer';

export default combineReducers({
  newOffer: newOfferReducer,
  offers: offersReducer
});
