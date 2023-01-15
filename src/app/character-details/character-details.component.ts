import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {select, Store} from "@ngrx/store";
import * as CharacterDetailsSelector from "../character-details/state/character-details.selectors";
import {Observable} from "rxjs";
import {CharacterDetails} from "./models/character-details.model";
import {ActivatedRoute, RouterModule} from "@angular/router";
import * as fromCharacterDetailsActions from "../character-details/state/character-details.actions";
import {PlanetPipe} from "../shared/pipes/planet.pipe";
import {StarWarsEntityComponent} from "../shared/components/star-wars-entity/star-wars-entity.component";
import {AppState, AppStateFeature, AppStateFeatureStatus} from "../store/models/store.model";
import {LoaderComponent} from "../loader/loader.component";

@Component({
  selector: 'app-character-details',
  standalone: true,
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterModule,
    PlanetPipe,
    StarWarsEntityComponent,
    LoaderComponent,
  ],
})
export class CharacterDetailsComponent implements OnInit {
  characterDetailsWrapper$!: Observable<AppStateFeature<CharacterDetails>>;
  statuses = AppStateFeatureStatus;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.characterDetailsWrapper$ = this.store.pipe(select(CharacterDetailsSelector.selectCharacterDetails));

    this.route.params
      .subscribe(params => {
      this.loadCharacterDetails(params['uid']);
    })
  }

  private loadCharacterDetails(uid: string): void {
    this.store.dispatch(
      fromCharacterDetailsActions.loadCharacterDetails({
        uid,
      })
    );
  }
}
