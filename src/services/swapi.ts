import type PeopleResponse from "@/types/PeopleResponse";
import type Person from "@/types/Person";
import type PersonResponse from "@/types/PersonResponse";
import type Planet from "@/types/Planet";
import type PlanetResponse from "@/types/PlanetResponse";
import type PlanetsResponse from "@/types/PlanetsResponse";
import type Service from "@/types/Service";
import type Starship from "@/types/Starship";
import type StarshipResponse from "@/types/StarshipResponse";
import type StarshipsResponse from "@/types/StarshipsResponse";

export default class SwapiService implements Service {
  apiBase = "https://swapi.py4e.com/api";
  imageBase = "https://starwars-visualguide.com/assets/img";

  getResource = async <T>(url: string): Promise<T> => {
    const res = await fetch(`${this.apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResource<PeopleResponse>(`/people/`);
    return res.results.map(this.transformPerson);
  };

  getPerson = async (id: number) => {
    const item = await this.getResource<PersonResponse>(`/people/${id}/`);
    return this.transformPerson(item);
  };

  getAllPlanets = async () => {
    const res = await this.getResource<PlanetsResponse>(`/planets/`);
    return res.results.map(this.transformPlanet);
  };

  getPlanet = async (id: number) => {
    const planet = await this.getResource<PlanetResponse>(`/planets/${id}/`);
    return this.transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResource<StarshipsResponse>(`/starships/`);
    return res.results.map(this.transformStarship);
  };

  getStarship = async (id: number) => {
    const item = await this.getResource<StarshipResponse>(`/starships/${id}/`);
    return this.transformStarship(item);
  };

  extractId = (url: string) => {
    return parseInt(url.match(/\/([0-9]*)\/$/)![1]);
  };

  transformPlanet = (data: PlanetResponse): Planet => {
    const id = this.extractId(data.url);

    return {
      id,
      name: data.name,
      population: data.population,
      rotationPeriod: data.rotation_period,
      diameter: data.diameter,
    };
  };

  transformStarship = (data: StarshipResponse): Starship => {
    const id = this.extractId(data.url);
    return {
      id,
      name: data.name,
      model: data.model,
      manufacturer: data.manufacturer,
      costInCredits: data.cost_in_credits,
      crew: data.crew,
      passengers: data.passengers,
      cargoCapacity: data.cargo_capacity,
    };
  };

  transformPerson = (data: PersonResponse): Person => {
    const id = this.extractId(data.url);
    return {
      id,
      name: data.name,
      gender: data.gender,
      birthYear: data.birth_year,
      eyeColor: data.eye_color,
    };
  };

  getPersonImage = (id: number) => {
    return `${this.imageBase}/characters/${id}.jpg`;
  };

  getStarshipImage = (id: number) => {
    return `${this.imageBase}/starships/${id}.jpg`;
  };

  getPlanetImage = (id: number) => {
    return `${this.imageBase}/planets/${id}.jpg`;
  };
}
