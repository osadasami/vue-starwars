import type StarshipResponse from "./StarshipResponse";

type StarshipsResponse = {
  count: number;
  next: string;
  previous: string;
  results: StarshipResponse[];
};

export default StarshipsResponse;
