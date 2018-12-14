import { combineReducers } from 'redux';

import newOfferReducer from './newOfferReducer';
import accountCompanyReducer from './accountCompanyReducer';
import searchOffersReducer from './searchOffersReducer';
import userConnexionReducer from './userConnexionReducer';
import modalsAccountReducer from './modalsAccountReducer'

export default combineReducers({
  newOffer: newOfferReducer,
  searchOffers: searchOffersReducer,
  toggleModalsAccount: modalsAccountReducer,
  accountCompany: accountCompanyReducer,
  usersInfo: userConnexionReducer
});
