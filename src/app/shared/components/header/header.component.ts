import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CommonModule } from '@angular/common';
import {Store} from "@ngrx/store";
import {filter} from "rxjs";
import {AppState} from "../../../store";
import {NavigationEnd, Router, RouterEvent, RouterModule} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  previousRoute = '';
  lastCharactersListRoute = '';
  private currentRoute = '';

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(events => this.setRouteDetails(events as RouterEvent))
  }

  private setRouteDetails(event: RouterEvent): void {
    this.previousRoute = this.currentRoute;
    this.lastCharactersListRoute = this.previousRoute.indexOf('/characters') > -1 ?
      this.previousRoute : this.lastCharactersListRoute;
    this.currentRoute = event.url;

    this.ref.markForCheck();
  }
}
