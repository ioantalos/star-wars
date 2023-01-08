import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../store";
import {ActivatedRoute} from "@angular/router";
import * as PlanetSelector from "../planet/state/planet.selectors";
import * as fromPlanetActions from "../planet/state/planet.actions";
import {Planet} from "./models/planet.model";

@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetComponent implements OnInit {
  planet$!: Observable<Planet>;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.planet$ = this.store.pipe(select(PlanetSelector.selectPlanet));

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
