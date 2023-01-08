import {Routes} from "@angular/router";
import {planet} from "./planet/planet.routes";
import {characterDetails} from "./character-details/character-details.routes";
import {characters} from "./characters-list/characters.routes";

export const routes: Routes = [
  ...characters,
  ...characterDetails,
  ...planet,
  { path: '**', redirectTo: '/characters', pathMatch: 'full' },
];
