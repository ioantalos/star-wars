import {createReducer, on} from '@ngrx/store';
import * as CharacterDetailsActions from './character-details.actions';
import {AppStateFeatureStatus, InitialAppStateFeature} from "../../store/models/store.model";

export const reducer = createReducer(
  InitialAppStateFeature,
  on(CharacterDetailsActions.loadCharacterDetails, (state, action) => {
    return  {
      ...state,
      status: AppStateFeatureStatus.Loading,
      error: undefined
    }}
  ),
  on(CharacterDetailsActions.loadCharacterDetailsSuccess, (state, action) => {
    return  {
      ...state,
      status: AppStateFeatureStatus.Success,
      error: undefined,
      activeItem: {...action.data},
      cachedItems: {
        ...state.cachedItems,
        [action.data?.uid as string]: {...action.data}
      }
    }}
  ),
  on(
    CharacterDetailsActions.loadCharacterDetailsFailure,
    (state, action) => {
      return {
        ...state,
        status: AppStateFeatureStatus.Error,
        error: action.error,
        activeItem: undefined
      };
    }
  )
);
