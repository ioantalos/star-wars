import {createReducer, on} from '@ngrx/store';
import * as CharacterDetailsActions from './character-details.actions';
import {CharacterDetails} from "../models/character-details.model";

export const characterDetailsFeatureKey = 'characterDetails';

export interface State extends CharacterDetails {
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
  on(CharacterDetailsActions.loadCharacterDetailsSuccess, (state, action) => {
    return  {
      ...state,
      ...action.data,
    }}
  ),
  on(
    CharacterDetailsActions.loadCharacterDetailsFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
      };
    }
  )
);

