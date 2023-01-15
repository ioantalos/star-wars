import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as PlanetReducer from './planet.reducer';
import {AppStateFeature} from "../../store/models/store.model";
import {Planet} from "../models/planet.model";
import {planetFeatureKey} from "./planet.constants";

export const selectPlanetState = createFeatureSelector<AppStateFeature<Planet>>(
  planetFeatureKey
);

export const selectPlanet = createSelector(
  selectPlanetState,
  (state: AppStateFeature<Planet>) => state
);

export const selectItemFromCache = (uid: string) => createSelector(
  selectPlanetState,
  (state: AppStateFeature<Planet>) => state.cachedItems?.[uid]
);
