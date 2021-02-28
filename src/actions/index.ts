import axios from 'axios';
import { Dispatch } from 'redux'; // dispatch type
import {ActionTypes} from './types';

// fetched data interface
export interface Station {
    stationName: string;
    stationFrequency: string;
    id: string;
}

// interface to describe action object (makes sure you always pass object with correct types and properties)
export interface fetchStationsAction {
    type: ActionTypes.fetchTodos;
    payload: Station[]
}

const url = 'https://my-json-server.typicode.com/KasparasDijokas/jsonPlaceholder/stations';
const axiosConfig = {
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
};

export const fetchStations = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Station[]>(url, axiosConfig); // response type is interface Station

    dispatch<fetchStationsAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};
