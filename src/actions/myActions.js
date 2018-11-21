import { MY_ACTION_TYPE1, MY_ACTION_TYPE2 } from './types';

/**
 * comment your function
 */
export const myAction1 = () => (dispatch) => {
  //Code here your action and dispatch it to the reducer
  dispatch({
    type: MY_ACTION_TYPE1,
    property: value,
  });
};

export const myAction2 = () => (dispatch) => {
  dispatch({
    type: MY_ACTION_TYPE2,
    property: value,
  });
};
