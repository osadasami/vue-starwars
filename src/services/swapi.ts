export default class SwapiService {
  apiBase = "https://swapi.dev/api";

  async getResource(url: string) {
    const res = await fetch(`${this.apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map(this.transformPerson);
  }

  async getPerson(id: number) {
    const item = await this.getResource(`/people/${id}/`);
    return this.transformPerson(item);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this.transformPlanet);
  }

  async getPlanet(id: number) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this.transformPlanet(planet);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this.transformStarship);
  }

  async getStarship(id: number) {
    const item = await this.getResource(`/starships/${id}/`);
    return this.transformStarship(item);
  }

  extractId(url: string) {
    return url.match(/\/([0-9]*)\/$/)![1];
  }

  transformPlanet(data: any) {
    const id = this.extractId(data.url);

    return {
      id,
      name: data.name,
      population: data.population,
      rotationPeriod: data.rotation_period,
      diameter: data.diameter,
    };
  }

  transformStarship(data: any) {
    return {
      id: this.extractId(data.url),
      name: data.name,
      model: data.model,
      manufacturer: data.manufacturer,
      costInCredits: data.costInCredits,
      crew: data.crew,
      passengers: data.passengers,
      cargoCapacity: data.cargoCapacity,
    };
  }

  transformPerson(data: any) {
    return {
      id: this.extractId(data.url),
      name: data.name,
      gender: data.gender,
      birthYear: data.birthYear,
      eyeColor: data.eyeColor,
    };
  }
}
