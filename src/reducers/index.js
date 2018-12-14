import { combineReducers } from 'redux';

import newOfferReducer from './newOfferReducer';
import accountCompanyReducer from './accountCompanyReducer';
import searchOffersReducer from './searchOffersReducer';
import userConnexionReducer from './userConnexionReducer';

export default combineReducers({
  newOffer: newOfferReducer,
  searchOffers: searchOffersReducer,
  accountCompany: accountCompanyReducer,
  usersInfo: userConnexionReducer
});
