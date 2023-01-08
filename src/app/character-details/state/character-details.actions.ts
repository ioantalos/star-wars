import {createAction, props} from '@ngrx/store';
import {CharacterDetails} from "../models/character-details.model";

export const loadCharacterDetails = createAction(
  '[CharacterDetails] Load Character Details',
  props<{ uid: string }>()
);

export const loadCharacterDetailsSuccess = createAction(
  '[CharacterDetails] Load Character Details Success',
  props<{ data: CharacterDetails | null }>()
);

export const loadCharacterDetailsFailure = createAction(
  '[CharacterDetails] Load Character Details Failure',
  props<{ error: unknown }>()
);
