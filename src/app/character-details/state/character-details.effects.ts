import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CharacterDetailsActions from './character-details.actions';
import {mergeMap, map, catchError, take} from 'rxjs/operators';
import { of } from 'rxjs';
import {CharacterService} from "../../shared/services/character.service";
import {CharacterDetails} from "../models/character-details.model";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store/models/store.model";
import {selectItemFromCache} from "./character-details.selectors";

@Injectable()
export class CharacterDetailsEffects {
  loadCharacterDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CharacterDetailsActions.loadCharacterDetails),
      mergeMap((action: {uid: string}) =>
        this.store
          .pipe(
            take(1),
            select(selectItemFromCache(action.uid)),
            map((item?: CharacterDetails)=> {
              return {
                uid: action.uid,
                item
              }
            }))
      ),
      mergeMap((action: { uid: string; item?: CharacterDetails }) => {
        const characterDetails$ = action.item ?
          of(action.item) :
          this.characterService.getCharacterDetails(action.uid);

        return characterDetails$.pipe(
          map((data?: CharacterDetails) =>
            CharacterDetailsActions.loadCharacterDetailsSuccess({data})
          ),
          catchError((error) =>
            of(CharacterDetailsActions.loadCharacterDetailsFailure({ error }))
          )
        )}
      )
    );
  });

  constructor(
    private actions$: Actions,
    private characterService: CharacterService,
    private store: Store<AppState>,
  ) {}
}
