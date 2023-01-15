import { isDevMode } from '@angular/core';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {AppState} from "./models/store.model";
import * as fromCharacters from '../characters-list/state/characters.reducer';
import * as fromCharacterDetails from '../character-details/state/character-details.reducer';
import * as fromPlanet from '../planet/state/planet.reducer';
import {planetFeatureKey} from "../planet/state/planet.constants";
import {characterDetailsFeatureKey} from "../character-details/state/character-details.constants";

export const reducers: ActionReducerMap<AppState> = {
  [fromCharacters.charactersFeatureKey]: fromCharacters.reducer,
  [characterDetailsFeatureKey]: fromCharacterDetails.reducer,
  [planetFeatureKey]: fromPlanet.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [debug] : [];

export function debug(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state: AppState | undefined, action: Action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
