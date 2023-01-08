export interface StarWarsApiResponse<T> {
  result: {
    uid: string;
    description: string;
    properties: T
  }
}

export interface StarWarsEntity<T> {
  uid: string;
  description: string;
  properties?: T
}

export interface StarWarsProperties {
  created: Date;
  edited: Date;
  name: string;
  url: string;
}
