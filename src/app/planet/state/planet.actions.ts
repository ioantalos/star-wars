import {createAction, props} from '@ngrx/store';
import {Planet} from "../models/planet.model";

export const loadPlanet = createAction(
  '[Planet] Load Planet',
  props<{ uid: string }>()
);

export const loadPlanetSuccess = createAction(
  '[Planet] Load Planet Success',
  props<{ data: Planet | undefined }>() //
);

export const loadPlanetFailure = createAction(
  '[Planet] Load Planet Failure',
  props<{ error: unknown }>()
);
