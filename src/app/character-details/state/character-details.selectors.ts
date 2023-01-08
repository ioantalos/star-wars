import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as CharacterDetailsReducer from './character-details.reducer';

export const selectCharacterDetailsState = createFeatureSelector<CharacterDetailsReducer.State>(
  CharacterDetailsReducer.characterDetailsFeatureKey
);

export const selectCharacterDetails = createSelector(
  selectCharacterDetailsState,
  (state: CharacterDetailsReducer.State) => state
);

