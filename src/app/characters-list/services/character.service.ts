import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Character, CharactersApiResponseBody, PaginatedResult} from "../../models/character.model";
import {map} from "rxjs/operators";
import {PaginationService} from "./pagination.service";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient,
    private paginationService: PaginationService
  ) {}

  getCharacters(url: string): Observable<PaginatedResult<Character[]>> {
    return this.http
      .get<CharactersApiResponseBody>(url, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<CharactersApiResponseBody>) => {
          return {
            result: response.body?.results as Character[],
            pagination: this.paginationService.getPaginationInformation(response.body)
          }
        })
      );
  }
}
