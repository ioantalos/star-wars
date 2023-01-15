import {createReducer, on} from '@ngrx/store';
import * as PlanetActions from './planet.actions';
import {AppStateFeatureStatus, InitialAppStateFeature} from "../../store/models/store.model";

export const initialState = {...InitialAppStateFeature};

export const reducer = createReducer(
  initialState,
  on(PlanetActions.loadPlanet, (state, action) => {
    return  {
      ...state,
      status: AppStateFeatureStatus.Loading,
      error: undefined,
    }}
  ),
  on(PlanetActions.loadPlanetSuccess, (state, action) => {
    return  {
      ...state,
      status: AppStateFeatureStatus.Success,
      error: undefined,
      activeItem: {...action.data},
      cachedItems: {
        ...state.cachedItems,
        [action.data?.uid as string]: {...action.data}
      },
    }}
  ),
  on(PlanetActions.loadPlanetFailure,
    (state, action) => {
    return {
      ...state,
      status: AppStateFeatureStatus.Error,
      error: action.error,
      activeItem: undefined,
    }}
  )
);

