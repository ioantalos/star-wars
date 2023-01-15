import {StarWarsApiResponse, StarWarsEntity, StarWarsProperties} from "../../shared/models/star-wars.model";

export const CharacterDetailsApiSuffix = 'people/';
export type CharacterDetailsApiResponse = StarWarsApiResponse<CharacterDetailsProperties>
export type CharacterDetailsModel = StarWarsEntity<CharacterDetailsProperties>

interface CharacterDetailsProperties extends StarWarsProperties {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
}

export class CharacterDetails implements CharacterDetailsModel {
  description: string;
  properties?: CharacterDetailsProperties;
  uid: string;

  constructor(data: CharacterDetailsApiResponse | null) {
    this.uid = data?.result.uid ?? '';
    this.description = data?.result.description ?? '';
    this.properties = data?.result?.properties;
  }
}
