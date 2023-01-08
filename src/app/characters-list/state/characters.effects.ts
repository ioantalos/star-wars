import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CharactersActions from './characters.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {Character, PaginatedResult} from "../models/character.model";
import {CharacterService} from "../../shared/services/character.service";

@Injectable()
export class CharactersEffects {
  loadCharacters$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CharactersActions.loadCharacters),
      mergeMap((action: {page?: string}) =>
        this.characterService.getCharacters(action.page)
          .pipe(
            map((data: PaginatedResult<Character[]>) =>
              CharactersActions.loadCharactersSuccess({ paginatedResult: data }))
            ,
            catchError((error) =>
              of(CharactersActions.loadCharactersFailure({ error }))
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
