import { MY_ACTION_TYPE1, MY_ACTION_TYPE2 } from '../actions/types';

const initialState = {
  stateProperty: value,
  //Write here your state properties for this reducer with there initial value
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MY_ACTION_TYPE1:
      return {
        ...state,
        stateProperty: action.property,
      };
    case MY_ACTION_TYPE2:
      return {
        ...state,
        stateProperty: action.property,
      };
  }
}
