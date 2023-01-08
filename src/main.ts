import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {routes} from "./app/app.routes";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "./environments/environment";
import {metaReducers, reducers} from "./app/store";
import {EffectsModule} from "@ngrx/effects";
import {CharactersEffects} from "./app/characters-list/state/characters.effects";
import {CharacterDetailsEffects} from "./app/character-details/state/character-details.effects";
import {PlanetEffects} from "./app/planet/state/planet.effects";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      RouterModule.forRoot(routes),
      StoreModule.forRoot(reducers,{
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
          strictActionWithinNgZone: true,
          strictActionTypeUniqueness: true,
        }
      }),
      !environment.production ? StoreDevtoolsModule.instrument({maxAge:25}) : [],
      EffectsModule.forRoot([
        CharactersEffects,
        CharacterDetailsEffects,
        PlanetEffects
      ])
      )
  ]
})
  .catch(error => console.log(error))
