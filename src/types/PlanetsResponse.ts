import type PlanetResponse from "./PlanetResponse";

type PlanetsResponse = {
  count: number;
  next: string;
  previous: string;
  results: PlanetResponse[];
};

export default PlanetsResponse;
