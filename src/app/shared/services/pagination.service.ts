import { Injectable } from '@angular/core';
import {CharactersApiResponseBody, Pagination} from "../../characters-list/models/character.model";

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  getPaginationInformation(body: CharactersApiResponseBody | null): Pagination {
    return {
      first: '1',
      prev: this.getPageFromUrl(body?.previous),
      current: this.setCurrent(body),
      next: this.getPageFromUrl(body?.next),
      last: body?.total_pages?.toString() ?? '',
    }
  }

  private getPageFromUrl(url?: string): string {
    if (!url) {
      return '';
    }

    const startString = 'page=';
    const endString = '&limit';
    const start = url.indexOf(startString) + startString.length;
    const end = url.indexOf(endString);
    return url.substring(start, end);
  }

  private setCurrent(body: CharactersApiResponseBody | null): string {
    switch (true) {
      case !body:
        return '';

      case !!body?.next:
        return (Number(this.getPageFromUrl(body?.next)) - 1).toString();

      case !!body?.previous:
        return (Number(this.getPageFromUrl(body?.previous)) + 1).toString();

      default:
        return '';
    }
  }
}
