import {Routes} from "@angular/router";

const charactersCommonProperties = {
  title: 'Star Wars Characters',
  loadComponent: () => import('./characters-list.component').then(c => c.CharactersListComponent)
}

export const characters: Routes = [
  {
    path: 'characters',
    ...charactersCommonProperties
  },
  {
    path: 'characters/:page',
    ...charactersCommonProperties
  },
]

