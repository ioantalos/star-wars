import { createAction, props } from '@ngrx/store';
import {Character, PaginatedResult} from "../models/character.model";

export const loadCharacters = createAction(
  '[CharactersList] Load Characters',
  props<{ page?: string}>()
);

export const loadCharactersSuccess = createAction(
  '[CharactersList] Load Characters Success',
  props<{ paginatedResult: PaginatedResult<Character[]> }>()
);

export const loadCharactersFailure = createAction(
  '[CharactersList] Load Characters Failure',
  props<{ error: unknown }>()
);
