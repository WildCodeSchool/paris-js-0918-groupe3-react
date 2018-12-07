import { combineReducers } from 'redux';

import newOfferReducer from './newOfferReducer';
import offersCompanyReducer from './offersCompanyReducer';
import offersReducer from './offersReducer';
import userConnexionReducer from './userConnexionReducer';

export default combineReducers({
  newOffer: newOfferReducer,
  offers: offersReducer,
  offersCompanyList: offersCompanyReducer,
  usersInfo: userConnexionReducer
});
