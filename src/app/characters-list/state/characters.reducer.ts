import {createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import * as CharactersActions from './characters.actions';
import {Character, Pagination} from "../models/character.model";

export const charactersFeatureKey = 'characters';

export interface State extends EntityState<Character> {
  pagination: Pagination | null;
  error: unknown;
}

export const adapter: EntityAdapter<Character> = createEntityAdapter<Character>({
  selectId: selectCharacterId
});

export const initialState: State = adapter.getInitialState({
  pagination: null,
  error: null,
});

export const reducer = createReducer(
  initialState,
  on(CharactersActions.loadCharactersSuccess, (state, action) =>{
    return adapter.setAll(action.paginatedResult.result, {
      ...state,
      pagination: action.paginatedResult.pagination,
    })}
  ),
  on(
    CharactersActions.loadCharactersFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
      };
    }
  )
);

export const {
  selectAll,
} = adapter.getSelectors();

export function selectCharacterId(character: Character): string {
  return character.uid;
}
