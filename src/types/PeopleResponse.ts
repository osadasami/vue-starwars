import type PersonResponse from "./PersonResponse";

type PeopleResponse = {
  count: number;
  next: string;
  previous: string;
  results: PersonResponse[];
};

export default PeopleResponse;
