import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as CharactersReducer from './characters.reducer';

export const selectCharactersState = createFeatureSelector<CharactersReducer.State>(
  CharactersReducer.charactersFeatureKey
);

export const selectCharacters = createSelector(
  selectCharactersState,
  CharactersReducer.selectAll
);

export const selectPagination = createSelector(
  selectCharactersState,
  (state: CharactersReducer.State) => state.pagination
);
