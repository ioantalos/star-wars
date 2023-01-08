import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CharacterDetailsActions from './character-details.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {CharacterService} from "../../shared/services/character.service";
import {CharacterDetails} from "../models/character-details.model";

@Injectable()
export class CharacterDetailsEffects {
  loadCharacterDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CharacterDetailsActions.loadCharacterDetails),
      mergeMap((action: {uid: string}) =>
        this.characterService.getCharacterDetails(action.uid).pipe(
          map((data: CharacterDetails | null) =>
            CharacterDetailsActions.loadCharacterDetailsSuccess({data})
          ),
          catchError((error) =>
            of(CharacterDetailsActions.loadCharacterDetailsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}
}
