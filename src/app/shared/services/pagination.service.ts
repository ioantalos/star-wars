import { Injectable } from '@angular/core';
import {CharactersApiResponseBody, CharactersApiSuffix, Pagination} from "../../characters-list/models/character.model";
import {environment} from "../../../environments/environment";

const {baseApiUrl} = environment;

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  getPaginationInformation(body: CharactersApiResponseBody | null): Pagination {
    return {
      first: body?.previous ? `${baseApiUrl}${CharactersApiSuffix}?page=1&limit=10`: '',
      prev: body?.previous ?? '',
      next: body?.next ?? '',
      last: body?.next ? `${baseApiUrl}${CharactersApiSuffix}?page=${body?.total_pages}&limit=10` : '',
    }
  }
}
