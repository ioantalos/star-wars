import {Routes} from "@angular/router";

export const characterDetails: Routes = [
  {
    path: 'character-details/:uid',
    title: 'Star Wars Character Details',
    loadComponent: () => import('./character-details.component').then(c => c.CharacterDetailsComponent)
  },
]
