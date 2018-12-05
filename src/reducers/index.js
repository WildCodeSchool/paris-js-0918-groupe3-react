import { combineReducers } from 'redux';
import newOfferReducer from './newOfferReducer';
import offersCompanyReducer from './offersCompanyReducer';

export default combineReducers({
  newOffer: newOfferReducer,
  offersCompanyList: offersCompanyReducer
});
