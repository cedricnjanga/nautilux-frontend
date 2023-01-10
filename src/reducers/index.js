import { combineReducers } from 'redux';

import * as types from '../types';

export const interventions = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_INTERVENTIONS:
      return action.interventions
    default:
      return state
  }
}

export default () => combineReducers({
  interventions,
});
