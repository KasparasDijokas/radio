import { Station } from '../actions';
import { fetchStationsAction } from '../actions';
import { ActionTypes } from '../actions/types';

export const stationsReducer = (
  state: Station[] = [],
  action: fetchStationsAction
) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
