import {createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import * as CharacterActions from './character.actions';
import {Character, Pagination} from "../../models/character.model";

export const charactersFeatureKey = 'characters';

export interface State extends EntityState<Character> {
  pagination: Pagination | null;
  error: any;
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
  on(CharacterActions.loadCharactersSuccess, (state, action) =>{
    return adapter.setAll(action.paginatedResult.result, {
      ...state,
      pagination: action.paginatedResult.pagination,
    })}
  ),
  on(
    CharacterActions.loadCharactersFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
      };
    }
  )
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export function selectCharacterId(character: Character): string {
  return character.uid;
}
