import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as PlanetReducer from './planet.reducer';

export const selectPlanetState = createFeatureSelector<PlanetReducer.State>(
  PlanetReducer.planetFeatureKey
);

export const selectPlanet = createSelector(
  selectPlanetState,
  (state: PlanetReducer.State) => state
);

