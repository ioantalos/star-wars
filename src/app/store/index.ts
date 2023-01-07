import { isDevMode } from '@angular/core';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromCharacter from '../characters-list/state/characters.reducer';

export interface AppState {
  router: fromRouter.RouterReducerState;
  [fromCharacter.charactersFeatureKey]: fromCharacter.State;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  [fromCharacter.charactersFeatureKey]: fromCharacter.reducer
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [debug] : [];

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action: Action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
