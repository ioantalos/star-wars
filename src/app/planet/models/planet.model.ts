import {StarWarsApiResponse, StarWarsEntity, StarWarsProperties} from "../../shared/models/star-wars.model";

export const PlanetApiSuffix = 'planets/';
export type PlanetApiResponse = StarWarsApiResponse<PlanetProperties>;
export type PlanetModel = StarWarsEntity<PlanetProperties>;

interface PlanetProperties extends StarWarsProperties {
  diameter: string,
  rotation_period: string,
  orbital_period: string,
  gravity: string,
  population: string,
  climate: string,
  terrain: string,
  surface_water: string,
}

export class Planet implements PlanetModel {
  description: string;
  properties?: PlanetProperties;
  uid: string;

  constructor(data: PlanetApiResponse | null) {
    this.uid = data?.result.uid ?? '';
    this.description = data?.result.description ?? '';
    this.properties = data?.result?.properties;
  }
}
