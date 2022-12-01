import SwapiService from "@/services/swapi";
import { defineStore } from "pinia";

const usePeopleStore = defineStore("people", {
  state: () =>
    ({
      people: [],
      selectedPerson: null,
      isLoading: false,
      isError: false,
    } as any),

  actions: {
    async getPeople() {
      const swapiService = new SwapiService();

      try {
        this.isLoading = true;
        this.isError = false;
        const data = await swapiService.getAllPeople();
        this.people = data;
      } catch (err: any) {
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    },
    selectPerson(person: any) {
      this.selectedPerson = person.id;
    },
  },
});

export default usePeopleStore;
