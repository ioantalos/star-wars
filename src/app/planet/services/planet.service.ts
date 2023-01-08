import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Planet, PlanetApiSuffix, PlanetApiResponse} from "../models/planet.model";
import {environment} from "../../../environments/environment";

const {baseApiUrl} = environment;

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }

  getPlanet(uid: string): Observable<Planet|null> {
    const url = `${baseApiUrl}${PlanetApiSuffix}${uid}`;

    return this.http
      .get<PlanetApiResponse>(url, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<PlanetApiResponse>) =>
          response.body?.result ? {
            uid: response.body.result.uid,
            description: response.body.result.description,
            properties: response.body.result?.properties
          } : null
        )
      )
  }
}
