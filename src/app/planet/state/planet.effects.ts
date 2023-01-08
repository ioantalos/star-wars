import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PlanetActions from './planet.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {Planet} from "../models/planet.model";
import {PlanetService} from "../services/planet.service";

@Injectable()
export class PlanetEffects {
  loadPlanet$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlanetActions.loadPlanet),
      mergeMap((action: {uid: string}) =>
        this.planetService.getPlanet(action.uid).pipe(
          map((data: Planet | null) =>
            PlanetActions.loadPlanetSuccess({data})
          ),
          catchError((error) =>
            of(PlanetActions.loadPlanetFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private planetService: PlanetService
  ) {}
}
