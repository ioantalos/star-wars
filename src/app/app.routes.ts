import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: 'characters',
    title: 'Star Wars Characters',
    loadComponent: () => import('./characters-list/characters-list.component').then(c => c.CharactersListComponent)
  },
  {
    path: 'character-details/:uid',
    title: 'Star Wars Character Details',
    loadComponent: () => import('./character-details/character-details.component').then(c => c.CharacterDetailsComponent)
  },
  {
    path: 'planet/:uid',
    title: 'Star Wars Planet Details',
    loadComponent: () => import('./planet/planet.component').then(c => c.PlanetComponent)
  },
  { path: '**', redirectTo: '/characters', pathMatch: 'full' },
];
