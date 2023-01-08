import {createReducer, on} from '@ngrx/store';
import * as PlanetActions from './planet.actions';
import {Planet} from "../models/planet.model";

export const planetFeatureKey = 'planet';

export interface State extends Planet {
  error: any;
}

export const initialState: State = {
  description: "",
  properties: undefined,
  uid: "",
  error: null
};

export const reducer = createReducer(
  initialState,
  on(PlanetActions.loadPlanetSuccess, (state, action) => {
    return  {
      ...state,
      ...action.data,
    }}
  ),
  on(
    PlanetActions.loadPlanetFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
      };
    }
  )
);

