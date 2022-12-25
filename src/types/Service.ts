import type Person from "./Person";
import type Planet from "./Planet";
import type Starship from "./Starship";

interface Service {
  // getResource<T>(uri: string): Promise<T>;
  getAllPeople(): Promise<Person[]>;
  getPerson(id: number): Promise<Person>;
  getAllPlanets(): Promise<Planet[]>;
  getPlanet(id: number): Promise<Planet>;
  getAllStarships(): Promise<Starship[]>;
  getStarship(id: number): Promise<Starship>;
  getPersonImage(id: number): string;
  getStarshipImage(id: number): string;
  getPlanetImage(id: number): string;
  toString(): string;
}

export default Service;
