import { isDevMode } from '@angular/core';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromCharacters from '../characters-list/state/characters.reducer';
import * as fromCharacterDetails from '../character-details/state/character-details.reducer';
import * as fromPlanet from '../planet/state/planet.reducer';

export interface AppState {
  router: fromRouter.RouterReducerState;
  [fromCharacters.charactersFeatureKey]: fromCharacters.State;
  [fromCharacterDetails.characterDetailsFeatureKey]: fromCharacterDetails.State;
  [fromPlanet.planetFeatureKey]: fromPlanet.State;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  [fromCharacters.charactersFeatureKey]: fromCharacters.reducer,
  [fromCharacterDetails.characterDetailsFeatureKey]: fromCharacterDetails.reducer,
  [fromPlanet.planetFeatureKey]: fromPlanet.reducer
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [debug] : [];

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action: Action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
