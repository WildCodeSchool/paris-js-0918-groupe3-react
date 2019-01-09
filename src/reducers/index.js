import { combineReducers } from 'redux';

import newOfferReducer from './newOfferReducer';
import accountCompanyReducer from './accountCompanyReducer';
import accountCandidateReducer from './accountCandidateReducer';
import searchOffersReducer from './searchOffersReducer';
import userConnexionReducer from './userConnexionReducer';
import modalsAccountReducer from './modalsAccountReducer';
import applicationReducer from './applicationReducer';

export default combineReducers({
  newOffer: newOfferReducer,
  searchOffers: searchOffersReducer,
  toggleModalsAccount: modalsAccountReducer,
  accountCompany: accountCompanyReducer,
  accountCandidate: accountCandidateReducer,
  usersInfo: userConnexionReducer,
  application: applicationReducer
});
