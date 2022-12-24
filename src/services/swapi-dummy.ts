import type PeopleResponse from "@/types/PeopleResponse";
import type PlanetsResponse from "@/types/PlanetsResponse";
import type StarshipsResponse from "@/types/StarshipsResponse";
import SwapiService from "./swapi";

export default class SwapiServiceDammy extends SwapiService {
  apiBase = "https://swapi.py4e.com/api/";
  imageBase = "https://starwars-visualguide.com/assets/img";

  people: PeopleResponse = {
    count: 2,
    next: "",
    previous: "",
    results: [
      {
        name: "Luke Skywalker [TEST]",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        homeworld: "https://swapi.py4e.com/api/planets/1/",
        films: [
          "https://swapi.py4e.com/api/films/1/",
          "https://swapi.py4e.com/api/films/2/",
          "https://swapi.py4e.com/api/films/3/",
          "https://swapi.py4e.com/api/films/6/",
          "https://swapi.py4e.com/api/films/7/",
        ],
        species: ["https://swapi.py4e.com/api/species/1/"],
        vehicles: [
          "https://swapi.py4e.com/api/vehicles/14/",
          "https://swapi.py4e.com/api/vehicles/30/",
        ],
        starships: [
          "https://swapi.py4e.com/api/starships/12/",
          "https://swapi.py4e.com/api/starships/22/",
        ],
        created: "2014-12-09T13:50:51.644000Z",
        edited: "2014-12-20T21:17:56.891000Z",
        url: "https://swapi.py4e.com/api/people/1/",
      },
      {
        name: "C-3PO [TEST]",
        height: "167",
        mass: "75",
        hair_color: "n/a",
        skin_color: "gold",
        eye_color: "yellow",
        birth_year: "112BBY",
        gender: "n/a",
        homeworld: "https://swapi.py4e.com/api/planets/1/",
        films: [
          "https://swapi.py4e.com/api/films/1/",
          "https://swapi.py4e.com/api/films/2/",
          "https://swapi.py4e.com/api/films/3/",
          "https://swapi.py4e.com/api/films/4/",
          "https://swapi.py4e.com/api/films/5/",
          "https://swapi.py4e.com/api/films/6/",
        ],
        species: ["https://swapi.py4e.com/api/species/2/"],
        vehicles: [],
        starships: [],
        created: "2014-12-10T15:10:51.357000Z",
        edited: "2014-12-20T21:17:50.309000Z",
        url: "https://swapi.py4e.com/api/people/2/",
      },
    ],
  };
  planets: PlanetsResponse = {
    count: 2,
    next: "",
    previous: "",
    results: [
      {
        name: "Tatooine [TEST]",
        rotation_period: "23",
        orbital_period: "304",
        diameter: "10465",
        climate: "arid",
        gravity: "1 standard",
        terrain: "desert",
        surface_water: "1",
        population: "200000",
        residents: [
          "https://swapi.py4e.com/api/people/1/",
          "https://swapi.py4e.com/api/people/2/",
          "https://swapi.py4e.com/api/people/4/",
          "https://swapi.py4e.com/api/people/6/",
          "https://swapi.py4e.com/api/people/7/",
          "https://swapi.py4e.com/api/people/8/",
          "https://swapi.py4e.com/api/people/9/",
          "https://swapi.py4e.com/api/people/11/",
          "https://swapi.py4e.com/api/people/43/",
          "https://swapi.py4e.com/api/people/62/",
        ],
        films: [
          "https://swapi.py4e.com/api/films/1/",
          "https://swapi.py4e.com/api/films/3/",
          "https://swapi.py4e.com/api/films/4/",
          "https://swapi.py4e.com/api/films/5/",
          "https://swapi.py4e.com/api/films/6/",
        ],
        created: "2014-12-09T13:50:49.641000Z",
        edited: "2014-12-20T20:58:18.411000Z",
        url: "https://swapi.py4e.com/api/planets/1/",
      },
      {
        name: "Alderaan [TEST]",
        rotation_period: "24",
        orbital_period: "364",
        diameter: "12500",
        climate: "temperate",
        gravity: "1 standard",
        terrain: "grasslands, mountains",
        surface_water: "40",
        population: "2000000000",
        residents: [
          "https://swapi.py4e.com/api/people/5/",
          "https://swapi.py4e.com/api/people/68/",
          "https://swapi.py4e.com/api/people/81/",
        ],
        films: [
          "https://swapi.py4e.com/api/films/1/",
          "https://swapi.py4e.com/api/films/6/",
        ],
        created: "2014-12-10T11:35:48.479000Z",
        edited: "2014-12-20T20:58:18.420000Z",
        url: "https://swapi.py4e.com/api/planets/2/",
      },
    ],
  };
  starships: StarshipsResponse = {
    count: 2,
    next: "",
    previous: "",
    results: [
      {
        name: "CR90 corvette [TEST]",
        model: "CR90 corvette",
        manufacturer: "Corellian Engineering Corporation",
        cost_in_credits: "3500000",
        length: "150",
        max_atmosphering_speed: "950",
        crew: "30-165",
        passengers: "600",
        cargo_capacity: "3000000",
        consumables: "1 year",
        hyperdrive_rating: "2.0",
        MGLT: "60",
        starship_class: "corvette",
        pilots: [],
        films: [
          "https://swapi.py4e.com/api/films/1/",
          "https://swapi.py4e.com/api/films/3/",
          "https://swapi.py4e.com/api/films/6/",
        ],
        created: "2014-12-10T14:20:33.369000Z",
        edited: "2014-12-20T21:23:49.867000Z",
        url: "https://swapi.py4e.com/api/starships/5/",
      },
      {
        name: "Star Destroyer [TEST]",
        model: "Imperial I-class Star Destroyer",
        manufacturer: "Kuat Drive Yards",
        cost_in_credits: "150000000",
        length: "1,600",
        max_atmosphering_speed: "975",
        crew: "47,060",
        passengers: "n/a",
        cargo_capacity: "36000000",
        consumables: "2 years",
        hyperdrive_rating: "2.0",
        MGLT: "60",
        starship_class: "Star Destroyer",
        pilots: [],
        films: [
          "https://swapi.py4e.com/api/films/1/",
          "https://swapi.py4e.com/api/films/2/",
          "https://swapi.py4e.com/api/films/3/",
        ],
        created: "2014-12-10T15:08:19.848000Z",
        edited: "2014-12-20T21:23:49.870000Z",
        url: "https://swapi.py4e.com/api/starships/3/",
      },
    ],
  };

  getAllPeople = async () => {
    return this.people.results.map(this.transformPerson);
  };

  getPerson = async (id: number) => {
    return this.transformPerson(this.people.results[0]);
  };

  getAllPlanets = async () => {
    return this.planets.results.map(this.transformPlanet);
  };

  getPlanet = async (id: number) => {
    return this.transformPlanet(this.planets.results[1]);
  };

  getAllStarships = async () => {
    return this.starships.results.map(this.transformStarship);
  };

  getStarship = async (id: number) => {
    return this.transformStarship(this.starships.results[0]);
  };
}
