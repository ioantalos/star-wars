import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PlanetActions from './planet.actions';
import {mergeMap, map, catchError, take} from 'rxjs/operators';
import { of } from 'rxjs';
import {Planet} from "../models/planet.model";
import {PlanetService} from "../services/planet.service";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store/models/store.model";
import {selectItemFromCache} from "./planet.selectors";

@Injectable()
export class PlanetEffects {
  loadPlanet$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlanetActions.loadPlanet),
      mergeMap((action: {uid: string}) =>
        this.store
          .pipe(
            take(1),
            select(selectItemFromCache(action.uid)),
            map((item?: Planet)=> {
              return {
                uid: action.uid,
                item
              }
            }))
      ),
      mergeMap((action: { uid: string; item?: Planet }) => {
        const planet$ = action.item ?
          of(action.item) :
          this.planetService.getPlanet(action?.uid ?? '1');

        return planet$.pipe(
          map((data?: Planet) =>
            PlanetActions.loadPlanetSuccess({data})
          ),
          catchError((error) =>
            of(PlanetActions.loadPlanetFailure({ error }))
          )
        )}
      )
    );
  });

  constructor(
    private actions$: Actions,
    private planetService: PlanetService,
    private store: Store<AppState>,
  ) {}
}
