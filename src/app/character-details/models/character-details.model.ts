import {StarWarsApiResponse, StarWarsEntity, StarWarsProperties} from "../../shared/models/star-wars.model";

export const CharacterDetailsApiSuffix = 'people/';
export type CharacterDetailsApiResponse = StarWarsApiResponse<CharacterDetailsProperties>
export type CharacterDetails = StarWarsEntity<CharacterDetailsProperties>

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
