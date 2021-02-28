import { combineReducers } from 'redux';
import { stationsReducer } from './stations';
import { Station } from '../actions';

// stationsReducer function must return a value of type Station[]
export interface StoreState {
  stations: Station[];
}

export const reducers = combineReducers<StoreState>({
  stations: stationsReducer,
});
