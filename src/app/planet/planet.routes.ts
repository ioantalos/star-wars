import {Routes} from "@angular/router";

export const planet: Routes = [
  {
    path: 'planet/:uid',
    title: 'Star Wars Planet Details',
    loadComponent: () => import('./planet.component').then(c => c.PlanetComponent)
  },
]
