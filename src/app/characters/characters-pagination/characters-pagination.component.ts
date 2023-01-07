import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {select, Store} from "@ngrx/store";
import * as CharacterSelector from "../state/character.selectors";
import {AppState} from "../../store";
import {Observable} from "rxjs";
import {Pagination} from "../../models/character.model";

@Component({
  selector: 'app-characters-pagination',
  standalone: true,
  templateUrl: './characters-pagination.component.html',
  styleUrls: ['./characters-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class CharactersPaginationComponent implements OnInit{
  @Output() fetch: EventEmitter<string> = new EventEmitter<string>();

  pagination$!: Observable<Pagination | null>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.pagination$ = this.store.pipe(select(CharacterSelector.selectPagination));
  }

  fetchFrom(url: string): void {
    this.fetch.emit(url);
  }
}
