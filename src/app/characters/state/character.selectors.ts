import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as CharacterReducer from './character.reducer';

export const selectCharactersState = createFeatureSelector<CharacterReducer.State>(
  CharacterReducer.charactersFeatureKey
);

export const selectCharacters = createSelector(
  selectCharactersState,
  CharacterReducer.selectAll
);

export const selectPagination = createSelector(
  selectCharactersState,
  (state: CharacterReducer.State) => state.pagination
);
