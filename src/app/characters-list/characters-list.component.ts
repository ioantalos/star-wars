import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import * as fromCharactersActions from './state/characters.actions';
import * as CharacterSelector from './state/characters.selectors';
import {Observable} from "rxjs";
import {CommonModule} from "@angular/common";
import {Character} from "./models/character.model";
import {CharactersListItemComponent} from "./characters-list-item/characters-list-item.component";
import {CharactersPaginationComponent} from "./characters-pagination/characters-pagination.component";
import {ActivatedRoute, Router} from "@angular/router";
import {AppState} from "../store/models/store.model";

@Component({
  selector: 'app-characters-list',
  standalone: true,
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    CharactersListItemComponent,
    CharactersPaginationComponent
  ]
})

export class CharactersListComponent implements OnInit{
  characters$!: Observable<Character[]>;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.characters$ = this.store.pipe(select(CharacterSelector.selectCharacters));

    this.route.params
      .subscribe(params => {
        this.loadCharacters(params['page']);
      })
  }

  loadCharacters(page?: string): void {
    this.store.dispatch(
      fromCharactersActions.loadCharacters({
        page
      })
    );
  }

  setPage(page: string): void {
    this.router.navigate(['characters', page]);
  }
}
