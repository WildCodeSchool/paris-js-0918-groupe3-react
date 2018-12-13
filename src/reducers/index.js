import { combineReducers } from 'redux';

import newOfferReducer from './newOfferReducer';
import offersCompanyReducer from './offersCompanyReducer';
import searchOffersReducer from './searchOffersReducer';
import userConnexionReducer from './userConnexionReducer';

export default combineReducers({
  newOffer: newOfferReducer,
  searchOffers: searchOffersReducer,
  offersCompanyList: offersCompanyReducer,
  usersInfo: userConnexionReducer
});
