import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import * as PlanetSelector from "../planet/state/planet.selectors";
import * as fromPlanetActions from "../planet/state/planet.actions";
import {StarWarsEntityComponent} from "../shared/components/star-wars-entity/star-wars-entity.component";
import {AppState, AppStateFeature, AppStateFeatureStatus} from "../store/models/store.model";
import {Planet} from "./models/planet.model";
import {LoaderComponent} from "../loader/loader.component";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-planet',
  standalone: true,
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    StarWarsEntityComponent,
    LoaderComponent
  ],
})
export class PlanetComponent implements OnInit {
  planetWrapper$!: Observable<AppStateFeature<Planet>>;

  statuses = AppStateFeatureStatus;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.planetWrapper$ = this.store.pipe(select(PlanetSelector.selectPlanet));

    this.route.params
      .subscribe(params => {
        this.loadPlanet(params['uid']);
      })
  }

  private loadPlanet(uid: string): void {
    this.store.dispatch(
      fromPlanetActions.loadPlanet({
        uid,
      })
    );
  }
}
