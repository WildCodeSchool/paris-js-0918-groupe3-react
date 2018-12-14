import { combineReducers } from 'redux';

import newOfferReducer from './newOfferReducer';
import offersCompanyReducer from './offersCompanyReducer';
import searchOffersReducer from './searchOffersReducer';
import userConnexionReducer from './userConnexionReducer';
import modalsAccountReducer from './modalsAccountReducer'

export default combineReducers({
  newOffer: newOfferReducer,
  searchOffers: searchOffersReducer,
  offersCompanyList: offersCompanyReducer,
  usersInfo: userConnexionReducer,
  toggleModals: modalsAccountReducer
});
