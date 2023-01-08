export const CharactersApiSuffix = 'people/';

export interface CharactersApiResponseBody {
  results: Character[],
  message: string;
  next: string;
  previous: string;
  total_pages: number
  total_records: number;
}

export interface Character {
  uid: string;
  name: string;
  url: string;
}

export interface Pagination {
  first: string;
  prev: string;
  current: string;
  next: string;
  last: string;
}

export interface PaginatedResult<T> {
  result: T;
  pagination: Pagination;
}
