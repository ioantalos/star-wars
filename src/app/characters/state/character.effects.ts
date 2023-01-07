import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CharacterActions from './character.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {Character, PaginatedResult} from "../../models/character.model";
import {CharacterService} from "../services/character.service";

@Injectable()
export class CharacterEffects {
  loadCharacters$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CharacterActions.loadCharacters),
      mergeMap((action: {url: string}) =>
        this.characterService.getCharacters(action.url).pipe(
          map((data: PaginatedResult<Character[]>) =>
            CharacterActions.loadCharactersSuccess({ paginatedResult: data })
          ),
          catchError((error) =>
            of(CharacterActions.loadCharactersFailure({ error }))
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
