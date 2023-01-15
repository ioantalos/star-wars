import { createFeatureSelector, createSelector } from '@ngrx/store';
import {CharacterDetails} from "../models/character-details.model";
import {AppStateFeature} from "../../store/models/store.model";
import {characterDetailsFeatureKey} from "./character-details.constants";

export const selectCharacterDetailsState = createFeatureSelector<AppStateFeature<CharacterDetails>>(
  characterDetailsFeatureKey
);

export const selectCharacterDetails = createSelector(
  selectCharacterDetailsState,
  (state: AppStateFeature<CharacterDetails>) => state
);

export const selectItemFromCache = (uid: string) => createSelector(
  selectCharacterDetailsState,
  (state: AppStateFeature<CharacterDetails>) => state.cachedItems?.[uid]
);
