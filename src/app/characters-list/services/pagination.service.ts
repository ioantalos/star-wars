import { Injectable } from '@angular/core';
import {CharactersApiResponseBody, Pagination} from "../../models/character.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  getPaginationInformation(body: CharactersApiResponseBody | null): Pagination {
    return {
      first: body?.previous ? `${environment.charactersUrl}?page=1&limit=10`: '',
      prev: body?.previous ?? '',
      next: body?.next ?? '',
      last: body?.next ? `${environment.charactersUrl}?page=${body?.total_pages}&limit=10` : '',
    }
  }
}
