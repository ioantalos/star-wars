import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {
  Character,
  CharactersApiResponseBody,
  CharactersApiSuffix,
  PaginatedResult
} from "../../characters-list/models/character.model";
import {map} from "rxjs/operators";
import {PaginationService} from "./pagination.service";
import {
  CharacterDetails,
  CharacterDetailsApiResponse,
  CharacterDetailsApiSuffix
} from "../../character-details/models/character-details.model";
import {environment} from "../../../environments/environment";

const {baseApiUrl} = environment;

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(
    private http: HttpClient,
    private paginationService: PaginationService
  ) {}

  getCharacters(page?: string): Observable<PaginatedResult<Character[]>> {
    const apiUrl = this.setUrl(page);

    return this.http
      .get<CharactersApiResponseBody>(apiUrl, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<CharactersApiResponseBody>) => {
          return {
            result: response.body?.results as Character[],
            pagination: this.paginationService.getPaginationInformation(response.body)
          }
        })
      );
  }

  private setUrl(page?: string): string {
    const pageString = page ? `?page=${page}&limit=10` : '';
    return `${baseApiUrl}${CharactersApiSuffix}${pageString}`;
  }

  getCharacterDetails(uid: string): Observable<CharacterDetails|null> {
    const url = `${baseApiUrl}${CharacterDetailsApiSuffix}${uid}`;

    return this.http
      .get<CharacterDetailsApiResponse>(url, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<CharacterDetailsApiResponse>) =>
          response.body?.result ? {
            uid: response.body.result.uid,
            description: response.body.result.description,
            properties: response.body.result?.properties
          } : null
        )
      );
  }
}
