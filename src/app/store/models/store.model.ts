import * as fromCharacters from "../../characters-list/state/characters.reducer";
import {Planet} from "../../planet/models/planet.model";
import {CharacterDetails} from "../../character-details/models/character-details.model";
import {planetFeatureKey} from "../../planet/state/planet.constants";
import {characterDetailsFeatureKey} from "../../character-details/state/character-details.constants";

export enum AppStateFeatureStatus {
  'NotStarted',
  'Loading',
  'Success',
  'Error',
}

export interface AppStateFeature<T> {
  status: AppStateFeatureStatus;
  error: any;
  activeItem?: T;
  cachedItems?: Record<string, T>
}

export const InitialAppStateFeature: AppStateFeature<any> = {
  status: AppStateFeatureStatus.NotStarted,
  error: undefined,
  activeItem: undefined,
  cachedItems: undefined
}

export interface AppState {
  [fromCharacters.charactersFeatureKey]: fromCharacters.State;
  [characterDetailsFeatureKey]: AppStateFeature<CharacterDetails>;
  [planetFeatureKey]: AppStateFeature<Planet>;
}
