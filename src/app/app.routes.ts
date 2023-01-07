import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: 'characters',
    title: 'Star Wars Characters',
    loadComponent: () => import('./characters/characters-list.component').then(c => c.CharactersListComponent)
  },
  { path: '**', redirectTo: '/characters', pathMatch: 'full' },
];
