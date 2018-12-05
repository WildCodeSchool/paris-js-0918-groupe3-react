import { combineReducers } from 'redux';

import newOfferReducer from './newOfferReducer';
import offersCompanyReducer from './offersCompanyReducer';
import offersReducer from './offersReducer';

export default combineReducers({
  newOffer: newOfferReducer,
  offers: offersReducer,
  offersCompanyList: offersCompanyReducer
});
