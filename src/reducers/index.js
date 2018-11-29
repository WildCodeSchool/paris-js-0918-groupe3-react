import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import newOfferReducer from './newOfferReducer';



export default combineReducers({
  newOffer: newOfferReducer,
  form: formReducer,
});
