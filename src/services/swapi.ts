export default class SwapiService {
  apiBase = "https://swapi.py4e.com/api";
  imageBase = "https://starwars-visualguide.com/assets/img";

  getResource = async (url: string) => {
    const res = await fetch(`${this.apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this.transformPerson);
  };

  getPerson = async (id: number) => {
    const item = await this.getResource(`/people/${id}/`);
    return this.transformPerson(item);
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this.transformPlanet);
  };

  getPlanet = async (id: number) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this.transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this.transformStarship);
  };

  getStarship = async (id: number) => {
    const item = await this.getResource(`/starships/${id}/`);
    return this.transformStarship(item);
  };

  extractId = (url: string) => {
    return url.match(/\/([0-9]*)\/$/)![1];
  };

  transformPlanet = (data: any) => {
    const id = this.extractId(data.url);

    return {
      id,
      name: data.name,
      population: data.population,
      rotationPeriod: data.rotation_period,
      diameter: data.diameter,
    };
  };

  transformStarship = (data: any) => {
    const id = this.extractId(data.url);
    return {
      id,
      name: data.name,
      model: data.model,
      manufacturer: data.manufacturer,
      costInCredits: data.cost_in_Credits,
      crew: data.crew,
      passengers: data.passengers,
      cargoCapacity: data.cargo_capacity,
    };
  };

  transformPerson = (data: any) => {
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
